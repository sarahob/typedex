<template>
  <svg ref="svg" :width="width" :height="height"></svg>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';

import * as d3 from 'd3';
import { sankey as d3Sankey, sankeyLinkHorizontal } from 'd3-sankey';

const props = defineProps({
  nodes: { type: Array, required: true },
  links: { type: Array, required: true },
  width: { type: Number, default: 600 },
  height: { type: Number, default: 400 },
});

const svg = ref<SVGSVGElement | null>(null);

function renderChart() {
  if (!svg.value) return;
  // Clear previous chart
  d3.select(svg.value).selectAll('*').remove();

  // Set up Sankey generator
  const sankeyGen = d3Sankey()
    .nodeWidth(20)
    .nodePadding(10)
    .extent([
      [1, 1],
      [props.width - 1, props.height - 6],
    ]);

  // Prepare data
  const graph = sankeyGen({
    nodes: props.nodes.map((d: any) => Object.assign({}, d)),
    links: props.links.map((d: any) => Object.assign({}, d)),
  } as any);

  // Draw links
  d3.select(svg.value)
    .append('g')
    .selectAll('path')
    .data(graph.links)
    .join('path')
    .attr('d', sankeyLinkHorizontal())
    .attr('stroke', '#8884d8')
    .attr('stroke-width', (d: any) => Math.max(1, d.width))
    .attr('fill', 'none')
    .attr('opacity', 0.5);

  // Draw nodes
  d3.select(svg.value)
    .append('g')
    .selectAll('rect')
    .data(graph.nodes)
    .join('rect')
    .attr('x', (d: any) => d.x0)
    .attr('y', (d: any) => d.y0)
    .attr('height', (d: any) => d.y1 - d.y0)
    .attr('width', (d: any) => d.x1 - d.x0)
    .attr('fill', '#1976d2')
    .attr('stroke', '#333');

  // Draw node labels
  d3.select(svg.value)
    .append('g')
    .selectAll('text')
    .data(graph.nodes)
    .join('text')
    .attr('x', (d: any) => d.x0 - 6)
    .attr('y', (d: any) => (d.y1 + d.y0) / 2)
    .attr('dy', '0.35em')
    .attr('text-anchor', 'end')
    .text((d: any) => d.name)
    .attr('fill', '#222');
}

onMounted(renderChart);
watch(() => [props.nodes, props.links, props.width, props.height], renderChart);
</script>

<style scoped>
svg {
  width: 100%;
  height: auto;
  display: block;
}
</style>
