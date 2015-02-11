var expect = chai.expect;

describe('PieceView', function() {

	var myPiece = new PieceModel();

	it('should require a model', function() {
		expect(function() {
			var myPieceView = new PieceView();
		}).to.throw('PieceView requires a model.');
	});

	it('should have a render method', function() {
		var myPieceView = new PieceView({model: myPiece});
		expect(myPieceView.render).to.exist();
	});

	it('should render a piece of type=0 and rotation=0 correctly', function() {
		var myPieceModel = new PieceModel({
			type: 0,
			rotation: 0
		});
		var myPieceView = new PieceView({model: myPieceModel});
		myPieceView.render();

		// This is jQuery
		var $box1 = myPieceView.$el.children().eq(0);

		expect($box1.css('top')).to.equal('60px');
		expect($box1.css('left')).to.equal('0px');

		var $box2 = myPieceView.$el.children().eq(1);

		expect($box2.css('top')).to.equal('60px');
		expect($box2.css('left')).to.equal('20px');
	});

	it('should render a piece of type=0 and rotation=1 correctly', function() {
			var myPieceModel = new PieceModel({
				type: 0,
				rotation: 1
			});
			var myPieceView = new PieceView({model: myPieceModel});
			myPieceView.render();

			// This is jQuery
			var $box1 = myPieceView.$el.children().eq(0);

			expect($box1.css('top')).to.equal('0px');
			expect($box1.css('left')).to.equal('20px');

			var $box2 = myPieceView.$el.children().eq(1);

			expect($box2.css('top')).to.equal('20px');
			expect($box2.css('left')).to.equal('20px');
		});

	it('should render a piece of type=1 and rotation=0 correctly', function() {
			var myPieceModel = new PieceModel({
				type: 1,
				rotation: 0
			});
			var myPieceView = new PieceView({model: myPieceModel});
			myPieceView.render();

			// This is jQuery
			var $box1 = myPieceView.$el.children().eq(0);

			expect($box1.css('top')).to.equal('0px');
			expect($box1.css('left')).to.equal('0px');

			var $box2 = myPieceView.$el.children().eq(1);

			expect($box2.css('top')).to.equal('0px');
			expect($box2.css('left')).to.equal('20px');
		});

	it('should render a piece of type=2 and rotation=2 correctly', function() {
			var myPieceModel = new PieceModel({
				type: 2,
				rotation: 2
			});
			var myPieceView = new PieceView({model: myPieceModel});
			myPieceView.render();

			// This is jQuery
			var $box1 = myPieceView.$el.children().eq(2);

			expect($box1.css('top')).to.equal('0px');
			expect($box1.css('left')).to.equal('20px');

			// var $box2 = myPieceView.$el.children().eq(1);

			// expect($box2.css('top')).to.equal('0px');
			// expect($box2.css('left')).to.equal('20px');
		});
});

describe('PieceView.$el', function() {

	var myPiece = new PieceModel();

	it('should have four elements inside', function() {
		var myPieceView = new PieceView({model: myPiece});
		expect(myPieceView.$el.children().length).to.equal(4);
	});

	it('should have four elements with a class of box inside', function() {
		var myPieceView = new PieceView({model: myPiece});
		expect(myPieceView.$el.children('.box').length).to.equal(4);
	});

	it('should have a class of piece', function() {
		var myPieceView = new PieceView({model: myPiece});
		expect(myPieceView.$el.hasClass('piece')).to.equal(true);
	});
});

describe('PieceModel', function() {

	var myPiece = new PieceModel();

	it('should be defined', function() {
		expect(PieceModel).to.exist();
	});

	it('should have a move method', function() {
		expect(myPiece.move).to.exist();
	});

	it('should have a rotate method', function() {
		expect(myPiece.rotate).to.exist();
	});

	it('should have a drop method', function() {
		expect(myPiece.drop).to.exist();
	});

	it('should have a left method', function() {
		expect(myPiece.left).to.exist();
	});

	it('should have a right method', function() {
		expect(myPiece.right).to.exist();
	});

	it('should have a top method', function() {
		expect(myPiece.top).to.exist();
	});

	it('should have a bottom method', function() {
		expect(myPiece.top).to.exist();
	});

	it('should have a type property', function() {
		expect(myPiece.attributes.type).to.exist();
	});

	it('should have a rotation property', function() {
		expect(myPiece.attributes.rotation).to.exist();
	});

	it('should have a age property', function() {
		expect(myPiece.attributes.age).to.exist();
	});

	it('should have a left property', function() {
		expect(myPiece.attributes.left).to.exist();
	});

	it('should rotate correctly', function() {
		var myPieceToRotate = new PieceModel({
			age: 3,
			rotation: 1,
			left: 5,
			type: 2
		});
		myPieceToRotate.rotate();
		expect(myPieceToRotate.get('rotation')).to.equal(2);
		myPieceToRotate.rotate();
		expect(myPieceToRotate.get('rotation')).to.equal(3);
		myPieceToRotate.rotate();
		expect(myPieceToRotate.get('rotation')).to.equal(0);
		myPieceToRotate.rotate();
		expect(myPieceToRotate.get('rotation')).to.equal(1);
	});

	it('should rotate back to zero after reaching 3', function() {
		var myPieceToRotate = new PieceModel({
			age: 3,
			rotation: 3,
			left: 5,
			type: 2
		});
		myPieceToRotate.rotate();
		expect(myPieceToRotate.get('rotation')).to.equal(0);
	});

	it('should properly calculate the left value', function() {
		var piece1 = new PieceModel({
			type: 0,
			rotation: 0
		});
		expect(piece1.left()).to.equal(0);
		// expect(piece1.right()).to.equal(4);
		// expect(piece1.bottom()).to.equal(4);
		

		var piece2 = new PieceModel({
			type: 0,
			rotation: 1
		});
		expect(piece2.left()).to.equal(1);
		// expect(piece2.right()).to.equal(2);
		// expect(piece2.bottom()).to.equal(4);
		// expect(piece2.top()).to.equal(0);
	});

	it('should properly calculate the top value', function() {
		var piece1 = new PieceModel({
			type: 0,
			rotation: 0
		});
		expect(piece1.top()).to.equal(0);
	});

	// ---> ---> ---> ---> ---> ---> ---> ---> ---> --->

	it('should have a width method', function() {
		expect(myPiece.width).to.exist();
	});

	it('should properly calculate the width', function() {
		
		var piece1 = new PieceModel({
			type: 0,
			rotation: 0,
		});
		expect(piece1.width()).to.equal(4);

	});

	it('should have a height method', function() {
		expect(myPiece.height).to.exist();

		var piece1 = new PieceModel({
			type: 0,
			rotation: 2,
		});
		expect(piece1.height()).to.equal(1);
	});

	it('should have a iterateMatrix method', function() {
		expect(myPiece.iterateMatrix).to.exist();
	});

	it('should properly calculate the value at the x, y coordinates', function() {

		var piece1 = new PieceModel({
			type: 0,
			rotation: 1
		});

		piece1.iterateMatrix(function(x, y) {
			// console.log(x, y);
			expect(Constant.PIECES[0][1][y][x]).to.equal(1);
		})

	});

	it('should properly calculate the right value', function() {

		var piece1 = new PieceModel({
			type: 0,
			rotation: 0
		});
		expect(piece1.right()).to.equal(4);

		var piece2 = new PieceModel({
			type: 0,
			rotation: 1
		});
		expect(piece2.right()).to.equal(2);

	});

	it('should properly calculate the bottom value', function() {
		var piece1 = new PieceModel({
			type: 0,
			rotation: 0
		});
		expect(piece1.bottom()).to.equal(4);

		var piece2 = new PieceModel({
			type: 0,
			rotation: 3
		});
		expect(piece2.bottom()).to.equal(4);

	});
});