class Circle {
    constructor(radius) {
        this.radius = radius
    }
    get diameter() {
        return this.radius * 2
    }
    set diameter(newDiameter) {
        this.radius = newDiameter/2
    }
    get circumference() {
        return Math.PI * this.diameter
    }
    set circumference(newCircumference) {
        this.radius = newCircumference/(2*Math.PI)
    }
    get area() {
        return Math.PI * this.radius ** 2
    }
    set area(newArea) {
        this.radius = Math.sqrt(newArea/Math.PI)
    }
}
// Diameter = radius • 2
// Circumference = π • diameter
// Area of circle = π • radius**2
//convert diameter to radius
//radius = diameter/2
//convert circumference to radius
//radius = circumference/(2π)
//convert area of circle to radius
//radius = sqauareroot(area/π)