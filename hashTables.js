



//hash with direct mapping 
//hash with coilision handler (cormen)

function hashAlloc(dictionary, element){
	
	var head = dictionary;
	head.push(element);	
	
	return head; 
	//return  head or leave is empty?
	//what is the best practice ??
}