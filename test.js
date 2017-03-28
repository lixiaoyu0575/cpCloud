/**
 * Created by xiaoyu on 17-3-12.
 */
"use strict";
var rectGroups = [
    {
        groupId: 1,
        rectLength: 100,
        rects: [
            {
                id: 1,
                type: "t1",
                value: 100,
                groupId: "g1"
            },
            {
                id: 2,
                type: "t2",
                value: 100,
                groupId: "g1"
            },
            {
                id: 3,
                type: "t1",
                value: 100,
                groupId: "g1"
            }]
    },
    {
        groupId: 2,
        rectLength: 80,
        rects: [
            {
                id: 4,
                type: "t1",
                value: 80,
                groupId: "g2"
            },
            {
                id: 5,
                type: "t3",
                value: 80,
                groupId: "g2"
            },
            {
                id: 6,
                type: "t1",
                value: 80,
                groupId: "g2"
            },
            {
                id: 7,
                type: "t1",
                value: 80,
                groupId: "g2"
            }]
    },
    {
        groupId: 3,
        rectLength: 75,
        rects: [{
            id: 8,
            type: "t1",
            value: 75,
            groupId: "g3"
        },
            {
                id: 9,
                type: "t1",
                value: 75,
                groupId: "g3"
            },
            {
                id: 10,
                type: "t1",
                value: 75,
                groupId: "g3"
            },
            {
                id: 11,
                type: "t1",
                value: 75,
                groupId: "g3"
            }]
    },
    {
        groupId: 4,
        rectLength: 65,
        rects: [{
            id: 12,
            type: "t1",
            value: 65,
            groupId: "g4"
        },
            {
                id: 13,
                type: "t3",
                value: 65,
                groupId: "g4"
            }]
    },
    {
        groupId: 5,
        rectLength: 50,
        rects: [{
            id: 14,
            type: "t1",
            value: 50,
            groupId: "g5"
        }]
    },
    {
        groupId: 6,
        rectLength: 45,
        rects: [{
            id: 15,
            type: "t3",
            value: 45,
            groupId: "g6"
        },
            {
                id: 16,
                type: "t2",
                value: 45,
                groupId: "g6"
            }]
    },
    {
        groupId: 7,
        rectLength: 40,
        rects: [{
            id: 17,
            type: "t1",
            value: 40,
            groupId: "g7"
        },
            {
                id: 18,
                type: "t1",
                value: 40,
                groupId: "g7"
            }]
    },
    {
        groupId: 8,
        rectLength: 38,
        rects: [{
            id: 19,
            type: "t1",
            value: 38,
            groupId: "g8"
        },
            {
                id: 20,
                type: "t1",
                value: 38,
                groupId: "g8"
            }]
    },
    {
        groupId: 9,
        rectLength: 20,
        rects: [{
            id: 21,
            type: "t2",
            value: 20,
            groupId: "g9"
        },
            {
                id: 22,
                type: "t2",
                value: 20,
                groupId: "g9"
            }]
    },

        {
            groupId: 4,
            rectLength: 65,
            rects: [{
                id: 12,
                type: "t1",
                value: 65,
                groupId: "g4"
            },
                {
                    id: 13,
                    type: "t3",
                    value: 65,
                    groupId: "g4"
                }]
        },
        {
            groupId: 5,
            rectLength: 50,
            rects: [{
                id: 14,
                type: "t1",
                value: 50,
                groupId: "g5"
            }]
        },
        {
            groupId: 6,
            rectLength: 45,
            rects: [{
                id: 15,
                type: "t3",
                value: 45,
                groupId: "g6"
            },
                {
                    id: 16,
                    type: "t2",
                    value: 45,
                    groupId: "g6"
                }]
        },
        {
            groupId: 7,
            rectLength: 40,
            rects: [{
                id: 17,
                type: "t1",
                value: 40,
                groupId: "g7"
            },
                {
                    id: 18,
                    type: "t1",
                    value: 40,
                    groupId: "g7"
                }]
        },
        {
            groupId: 8,
            rectLength: 38,
            rects: [{
                id: 19,
                type: "t1",
                value: 38,
                groupId: "g8"
            },
                {
                    id: 20,
                    type: "t1",
                    value: 38,
                    groupId: "g8"
                }]
        },
        {
            groupId: 9,
            rectLength: 20,
            rects: [{
                id: 21,
                type: "t2",
                value: 20,
                groupId: "g9"
            },
                {
                    id: 22,
                    type: "t2",
                    value: 20,
                    groupId: "g9"
                }]
        },
        {
            groupId: 1,
            rectLength: 100,
            rects: [
                {
                    id: 1,
                    type: "t1",
                    value: 100,
                    groupId: "g1"
                },
                {
                    id: 2,
                    type: "t2",
                    value: 100,
                    groupId: "g1"
                },
                {
                    id: 3,
                    type: "t1",
                    value: 100,
                    groupId: "g1"
                }]
        },
        {
            groupId: 2,
            rectLength: 80,
            rects: [
                {
                    id: 4,
                    type: "t1",
                    value: 80,
                    groupId: "g2"
                },
                {
                    id: 5,
                    type: "t3",
                    value: 80,
                    groupId: "g2"
                },
                {
                    id: 6,
                    type: "t1",
                    value: 80,
                    groupId: "g2"
                },
                {
                    id: 7,
                    type: "t1",
                    value: 80,
                    groupId: "g2"
                }]
        },
        {
            groupId: 3,
            rectLength: 75,
            rects: [{
                id: 8,
                type: "t1",
                value: 75,
                groupId: "g3"
            },
                {
                    id: 9,
                    type: "t1",
                    value: 75,
                    groupId: "g3"
                },
                {
                    id: 10,
                    type: "t1",
                    value: 75,
                    groupId: "g3"
                },
                {
                    id: 11,
                    type: "t1",
                    value: 75,
                    groupId: "g3"
                }]
        },
        {
            groupId: 4,
            rectLength: 65,
            rects: [{
                id: 12,
                type: "t1",
                value: 65,
                groupId: "g4"
            },
                {
                    id: 13,
                    type: "t3",
                    value: 65,
                    groupId: "g4"
                }]
        },
        {
            groupId: 5,
            rectLength: 50,
            rects: [{
                id: 14,
                type: "t1",
                value: 50,
                groupId: "g5"
            }]
        },
        {
            groupId: 6,
            rectLength: 45,
            rects: [{
                id: 15,
                type: "t3",
                value: 45,
                groupId: "g6"
            },
                {
                    id: 16,
                    type: "t2",
                    value: 45,
                    groupId: "g6"
                }]
        },
        {
            groupId: 7,
            rectLength: 40,
            rects: [{
                id: 17,
                type: "t1",
                value: 40,
                groupId: "g7"
            },
                {
                    id: 18,
                    type: "t1",
                    value: 40,
                    groupId: "g7"
                }]
        },
        {
            groupId: 8,
            rectLength: 38,
            rects: [{
                id: 19,
                type: "t1",
                value: 38,
                groupId: "g8"
            },
                {
                    id: 20,
                    type: "t1",
                    value: 38,
                    groupId: "g8"
                }]
        },
        {
            groupId: 9,
            rectLength: 20,
            rects: [{
                id: 21,
                type: "t2",
                value: 20,
                groupId: "g9"
            },
                {
                    id: 22,
                    type: "t2",
                    value: 20,
                    groupId: "g9"
                }]
        },

        {
            groupId: 4,
            rectLength: 65,
            rects: [{
                id: 12,
                type: "t1",
                value: 65,
                groupId: "g4"
            },
                {
                    id: 13,
                    type: "t3",
                    value: 65,
                    groupId: "g4"
                }]
        },
        {
            groupId: 5,
            rectLength: 50,
            rects: [{
                id: 14,
                type: "t1",
                value: 50,
                groupId: "g5"
            }]
        },
        {
            groupId: 6,
            rectLength: 45,
            rects: [{
                id: 15,
                type: "t3",
                value: 45,
                groupId: "g6"
            },
                {
                    id: 16,
                    type: "t2",
                    value: 45,
                    groupId: "g6"
                }]
        },
        {
            groupId: 7,
            rectLength: 40,
            rects: [{
                id: 17,
                type: "t1",
                value: 40,
                groupId: "g7"
            },
                {
                    id: 18,
                    type: "t1",
                    value: 40,
                    groupId: "g7"
                }]
        },
        {
            groupId: 8,
            rectLength: 38,
            rects: [{
                id: 19,
                type: "t1",
                value: 38,
                groupId: "g8"
            },
                {
                    id: 20,
                    type: "t1",
                    value: 38,
                    groupId: "g8"
                }]
        },
        {
            groupId: 9,
            rectLength: 20,
            rects: [{
                id: 21,
                type: "t2",
                value: 20,
                groupId: "g9"
            },
                {
                    id: 22,
                    type: "t2",
                    value: 20,
                    groupId: "g9"
                }]
        }
],
    color = d3.scale.category20(),
    rectsData;
d3.json("names2.json", function (res) {
    console.log(res);
    rectsData = getLayout(res);
    draw(rectsData);
});
function getLayout(data) {
    var size = [800, 800],
        spiral = archimedeanSpiral(size),
        // spiral = rectangularSpiral(size),
        widthScale = [20, 100],
        bounds = [],
        outputRects = [],
        spiralInt = 0,
        spiralStep = 0.5,
        padding = 1,
        isConflicting,
        groupsNum,
        groupRects,
        group,
        rectsLength,
        bound,
        i,
        test = 0,
        numMax = data[0].num;
    groupsNum = data.length;
    groupsNum = 100;
    data = data.sort(function (a, b) {
        return b.rectLength - a.rectLength;
    });
    for (i = 0; i < groupsNum; i++) {
        group = data[i];
        group.rectLength = (widthScale[1] - widthScale[0]) / numMax * group.num + widthScale[0];
        rectsLength = group.rects.length;
        do {
            bound = getBound(spiral(spiralInt), group.rectLength, rectsLength);
            isConflicting = judgeBound(bound, bounds, padding);
            spiralInt += spiralStep;
            console.log(spiralInt);
            test++;
        } while (isConflicting && test < 100000);
        bounds.push(bound);
        pushGroupRects(group, bound, outputRects);
    }
    return outputRects;
}
// rectsData = getLayout(rectGroups);
// console.log(rectsData);
// draw(rectsData);
function archimedeanSpiral(size) {
    var e = size[0] / size[1];
    return function (t) {
        return [e * (t *= 0.1) * Math.cos(t), t * Math.sin(t)];
    };
}
function rectangularSpiral(size) {
    var dy = 4,
        dx = dy * size[0] / size[1],
        x = 0,
        y = 0;
    return function (t) {
        var sign = t < 0 ? -1 : 1;
        // See triangular numbers: T_n = n * (n + 1) / 2.
        switch ((Math.sqrt(1 + 4 * sign * t) - sign) & 3) {
            case 0:  x += dx; break;
            case 1:  y += dy; break;
            case 2:  x -= dx; break;
            default: y -= dy; break;
        }
        return [x, y];
    };
}
function getBound(center, rectLength, rectsNum) {
    var x0, y0, x1, y1, halfL;
    halfL = rectsNum / 2 * rectLength;
    x0 = center[0] - halfL;
    x1 = center[0] + halfL;
    y0 = center[1] - rectLength / 2;
    y1 = center[1] + rectLength / 2;
    return [x0, y0, x1, y1];
}
function judgeBound(bound, bounds, padding) {
    var l = bounds.length,
        x0 = bound[0],
        y0 = bound[1],
        x1 = bound[2],
        y1 = bound[3],
        isCon = false,
        pad = padding || 0,
        i;
    for (i = 0; i < l; i++) {
        isCon = !(x0 > bounds[i][2] + pad || x1 < bounds[i][0] - pad ||
            y0 > bounds[i][3] + pad || y1 < bounds[i][1] - pad);
        if (isCon) {
            break;
        }
    }
    return isCon;
}
function pushGroupRects(group, bound, outputRects) {
    var rects = group.rects,
        x = bound[0],
        y = bound[1],
        l = rects.length,
        i;
    for (i = 0; i < l; i++) {
        rects[i].x = x;
        rects[i].y = y;
        rects[i].width = group.rectLength;
        rects[i].height = group.rectLength;
        outputRects.push(rects[i]);
        x += group.rectLength;
    }
}
function draw(rects) {
    console.log(d3);
    d3.select("body").append("svg")
        .attr("width", 1000)
        .attr("height", 1000)
        .append("g")
        .attr("transform", "translate(500,500)")
        .selectAll(".rect")
        .data(rects)
        .enter().append("rect")
        .attr("x", function (d) {
            console.log(d);
            return d.x;
        })
        .attr("y", function (d) {
            // console.log(d);
            return d.y;
        })
        .attr("width", function (d) {
            return d.width;
        })
        .attr("height", function (d) {
            return d.height;
        })
        .style("fill", function (d, i) {
            return color(d.type);
            // return "steelblue";
        });
}
