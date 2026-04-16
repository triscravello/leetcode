/**
 * There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.
 
 * For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
 
 * Return the ordering of courses you should take to finish all courses. If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.
 */

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    const graph = new Map();
    const inDegree = new Array(numCourses).fill(0);
    const result = [];
    const queue = [];

    // Build the graph and in-degree array
    for (const [course, prereq] of prerequisites) {
        if (!graph.has(prereq)) {
            graph.set(prereq, []);
        }
        graph.get(prereq).push(course);
        inDegree[course]++;
    }

    // Initialize the queue with courses having zero in-degrees
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }

    // Process the courses
    while (queue.length > 0) {
        const course = queue.shift();
        result.push(course);

        if (graph.has(course)) {
            for (const neighbor of graph.get(course)) {
                inDegree[neighbor]--;
                if (inDegree[neighbor] === 0) {
                    queue.push(neighbor);
                }
            }
        }
    }

    // If we were able to process all courses, return the result
    return result.length === numCourses ? result : [];
};