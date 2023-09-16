import { Node, RedBlackTree } from '../redblacktree'

let tree = new RedBlackTree();

window.onload = function () {
	document.querySelector('.add').addEventListener('click', function () {
		let num = document.querySelector('#inputAdd').value;
		let node = new Node(num);
		if (tree.addNode(node)) {
		} else {
			alert('哎呀，这个数字我们已经有啦~ 试试其他的吧！')
		}
	})

	document.querySelector('.remove').addEventListener('click', function () {
		let num = document.querySelector('#inputAdd').value;
		tree.removeNode(num)
	})
}


