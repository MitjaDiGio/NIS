function drawTable() {
    var div1 = document.getElementById('myTable');
	
    var tbl = document.createElement("table");
	
    for (var r = 0; r < 10; r++) {
        var row = document.createElement("tr"); 
        for (var c = 0; c < 10; c++) {
            var cell = document.createElement("td");
            var btn = document.createElement("button");
            cell.appendChild(btn);
			btn.innerHTML = "0";

            row.appendChild(cell);
        }           
    tbl.appendChild(row); 
    }
	div1.appendChild(tbl);
}
window.onload=drawTable;