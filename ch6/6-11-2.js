import fs from "fs";

run(process.argv); // 1. node process 의존성 제거!

function run(args) {
	// 2. 사용자 입력을 받아오는 부분 -> 유효성 검사 포함!
	// 3. 필요한 로직을 세세하게 읽지 않아도 되도록 처리
	const command = parseCommand(args);
	countOrders(command);
}

function parseCommand(args) {
	if (!args[2]) {
		throw new Error("파일 이름을 입력하세요");
	}

	const fileName = `./${args[2]}.json`;
	if (!fs.existsSync(fileName)) {
		throw new Error("파일이 존재하지 않습니다");
	}

	return {
		fileName,
		hasReadOnly: args.includes("-r"),
	};
}

function countOrders({fileName, hasReadOnly}) {
	const rawData = fs.readFileSync(fileName);
	const orders = JSON.parse(rawData);
	const filtered = hasReadOnly
		? orders.filter((order) => order.status === "ready")
		: orders;

	console.log(filtered.length);
}
