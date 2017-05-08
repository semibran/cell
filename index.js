module.exports = { Cell, steps, adjacent }

const { abs } = Math

function Cell (x, y) {
	return { x, y }
}

function steps (cell, other) {
	return abs(other.x - cell.x) + abs(other.y - cell.y)
}

function adjacent (cell, other) {
	return steps(cell, other) === 1
}
