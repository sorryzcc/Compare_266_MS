const XLSX = require('xlsx');

const table0923path = '266总表1010.xlsx'; 
const table1008path = '266总表1014.xlsx'; 

// 读取 Excel 文件
function readExcel(filePath) {
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(worksheet);
    
    return data;
}

// 读取两个 Excel 文件
const table0923Data = readExcel(table0923path); 
const table1008Data = readExcel(table1008path);

// console.log(table1008Data,'table1008Data');
// console.log(table0923Data,'table0923Data');


let newData = [];  
  
table1008Data.forEach(itemMS => {  
    const matchInTable266 = table0923Data.find(item266 => item266.Key === itemMS.Key);  
  
    // 如果找到了匹配的Key，并且Translate不相同  
    if (matchInTable266 && matchInTable266.Translate !== itemMS.Translate) {  
        newData.push({  
            Key: itemMS.Key,  
            ToolRemark:matchInTable266.ToolRemark,
            Translate1008: itemMS.Translate, 
            Translate0923: matchInTable266.Translate  
        });  
    } else if (!matchInTable266) {  
        // 如果没有找到匹配的Key，也添加到新数组中（因为table1008Data中独有的项也应该被包含）  
        newData.push({  
            Key: itemMS.Key,  
            ToolRemark:itemMS.ToolRemark,
            Translate1008: itemMS.Translate,  
            Translate0923: ''  
        });  
    }  
    // 注意：如果Translate相同，则不会添加这条数据到新数组中  
});  
  
console.log(newData);

// 将 JSON 数据转换为工作表
const worksheet = XLSX.utils.json_to_sheet(newData);

// 创建一个新的工作簿并添加工作表
const workbook = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

// 写入 Excel 文件
XLSX.writeFile(workbook, 'CompareExcel.xlsx');