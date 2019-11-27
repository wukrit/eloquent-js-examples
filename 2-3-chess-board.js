let size = 8
for (let i = 1; i <= size; i++){
	let line = i % 2 === 0 ? "#" : " "
    while (line.length < size)
    	line[line.length - 1] === " "
          ? line += "#"
      	  : line += " ";
	console.log(line)
}
