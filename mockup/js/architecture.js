var w = 500,
    h = 900,
    fill = d3.scale.category10(),
    nodes = [],
    links = [];

/**
 * Returns a list of all nodes under the root.
 */
function flatten(root) {
  var nodes = [];
  var i = 0;

  function recurse(node) {
    if (node.children)
      node.children.forEach(recurse);
    if (!node.id)
      node.id = ++i;
    nodes.push(node);
  }

  recurse(root);
  return nodes;
}

d3.json("signal.json", function(error, json) {

  if (error) console.error(error);

  var nodeById = d3.map();

  root = json.tree;
  // root.x = w / 2;
  // root.y = h - ( h / 4);

  json.nodes.forEach(function(node) {
    nodeById.set(node.id, node);
  });

  json.links.forEach(function(link) {
    link.source = nodeById.get(link.source);
    link.target = nodeById.get(link.target);
  });

  nodes = flatten(root).concat(json.nodes),
  links = d3.layout.tree().links(nodes).concat(json.links);

  var layers = d3.nest().key(function(d) { return d.layer; }).entries(nodes);

  var groups = d3.nest().key(function(d) { return Number.isInteger(d.group) ? d.group : 0; }).entries(nodes);

  var layerPath = function(d) {
    var res = "";
    if (d.values.length > 2) {
      res = "M" +
        d3.geom.hull(d.values.map(function(i) { return [i.x, i.y]; }))
          .join("L")
      + "Z";
    }
    return res;
  };

  var groupPath = function(d) {
      var res = "";
      if (d.values.length > 2) {
        res = "M" +
          d3.geom.hull(d.values.map(function(i) { return [i.x, i.y]; }))
            .join("L")
        + "Z";
      }
      return res;
  };

  var groupFill = function(d, i) { return fill(d.group); };

  var vis = d3.select("#chart").append("svg")
      .attr("width", w)
      .attr("height", h);

  var force = d3.layout.force()
      .nodes(nodes)
      .links(links)
      .size([w, h])
      .charge(-500)
      .linkStrength(0)
      .start();

  var node = vis.selectAll("circle.node")
      .data(nodes)
    .enter().append("circle")
      .attr("class", "node")
      // .attr("cx", function(d) { return d.x; })
      // .attr("cy", function(d) { return d.y; })
      .attr("r", 8)
      .style("fill", function(d, i) { return fill(d.group); })
      .style("stroke", function(d, i) { return d3.rgb(fill(d.group)).darker(2); })
      .style("stroke-width", 1.5)
      .call(force.drag);

  var link = vis.selectAll(".link")
      .data(links)
    .enter().append("line")
      .attr("class", "link");

  var text= vis.selectAll("text")
      .data(nodes)
      .enter()
      .append("text");

  var textLabels = text
                  //  .attr("x", function(d) { return d.x; })
                  //  .attr("y", function(d) { return d.y; })
                   .text( function (d) { return d.name; })
                   .attr("font-family", "sans-serif")
                   .attr("font-size", "12px")
                   .attr("fill", "grey");

  vis.style("opacity", 1e-6)
    .transition()
      .duration(1000)
      .style("opacity", 1);

  force.on("tick", function(e) {

    // Push different nodes in different directions for clustering.
    var k = .2 * e.alpha;
    nodes.forEach(function(o, i) {
      // layout in a kind of stack
      o.x += ( ( o.column - 1 ) % 4 * 100 - o.x ) * k  ;
      o.y += ( ( o.layer - 1 ) % 4 * 100 + 200 - o.y ) * k  ;
    });

    link.attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

    node.attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; });

    text.attr("x", function(d) { return d.x - 10; })
        .attr("y", function(d) { return d.y - 10; })

    vis.selectAll("path.group")
      .data(groups)
        .attr("d", groupPath)
      .enter().insert("path", "circle")
        .attr("class", "group")
        .style("fill", groupFill)
        .style("stroke", groupFill)
        .style("stroke-width", 40)
        .style("stroke-linejoin", "round")
        .style("opacity", .2)
        .attr("d", groupPath);

    vis.selectAll("path.layer")
      .data(layers)
        .attr("d", layerPath)
      .enter().insert("path", "circle")
        .attr("class", "layer")
        .style("fill", "#000")
        .style("stroke", "#000")
        .style("stroke-width", 40)
        .style("stroke-linejoin", "round")
        .style("opacity", .1)
        .attr("d", layerPath);

  });

});
