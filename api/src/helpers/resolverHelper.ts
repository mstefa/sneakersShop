export default function resolverHelper(args:any,bool:boolean){
	var obj = {atr:"id",ord:"ASC"}
	if(args.atr && (args.atr === "name" || bool && args.atr === "price" )){
		obj.atr = args.atr
	}
	if(args.ord && (args.ord === "ASC" || args.ord === "DESC")){
		obj.ord = args.ord
	}
	return obj

}

 
