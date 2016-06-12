// Use your Fencepost constructor function to create these new posts. Name each of your posts post<number> with the correct number from the postNum property.

// Then, connect them with the sendRopeTo function using the following criteria, and remember that one connection requires ropes to be sent from both posts:

// If two posts both have even-numbered y coordinates, they should be connected.
// If two posts both have odd-numbered x coordinates, they should be connected.


function Fencepost(x, y, postNum) {
  this.x = x;
  this.y = y;
  this.postNum = postNum;
  this.connectionsTo = [];
  this.sendRopeTo = function(connectedPost) {
    this.connectionsTo.push(connectedPost);
  };
}

// create post18, post19, and post20
var post18 = new Fencepost(-3, 4, 18);
var post19 = new Fencepost(5, -1, 19);
var post20 = new Fencepost(-2, 10, 20);

// establish post connections
post18.sendRopeTo(post19);
post18.sendRopeTo(post20);
post19.sendRopeTo(post18);
post20.sendRopeTo(post18);