/**
 * There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.
 * For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
 * Return true if you can finish all courses. Otherwise, return false.
 */

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const graph = new Map();
    const visited = new Array(numCourses).fill(0); // 0 = unvisited, 1 = visiting, 2 = visited

    for (let [course, prereq] of prerequisites) {
        if (!graph.has(prereq)) graph.set(prereq, []);
        graph.get(prereq).push(course);
    }

    const hasCycle = (course) => {
        if (visited[course] === 1) return true; // cycle detected
        if (visited[course] === 2) return false; // already processed

        visited[course] = 1; // mark as visiting
        const neighbors = graph.get(course) || [];
        for (let neighbor of neighbors) {
            if (hasCycle(neighbor)) return true;
        }

        visited[course] = 2; // mark as visited
        return false;
    }

    for (let i = 0; i < numCourses; i++) {
        if (hasCycle(i)) return false;
    }

    return true;
};