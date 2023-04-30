/**
 *
 * @returns {String} - return string with example : route1/route2/rout3
 * @param arrayRoutes - Array of routes, example : [route1, route2, route3]
 * function to concatenate endpoints with in /
 */
export const BackSlashRoute = (arrayRoutes) => {
    return arrayRoutes.join('/')
}
