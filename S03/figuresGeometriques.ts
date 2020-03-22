


let t1 = Triangle(5);
let t2 = Triangle(10);
let l1 = losange(5, 6); // diagonale 1, diagonale 2
let l2 = losange(4, 4);

let figures: Figure[] = [t1, t2, l1, l2];

for (let f of figures) {
    console.log(f.rapport());
}