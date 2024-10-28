import pandas as pd
from openpyxl import load_workbook

# 加载Excel文件
df1 = pd.read_excel('266总表1026.xlsx')
df2 = pd.read_excel('266总表1028.xlsx')

# 检查列名，确保它们是一致的
print(df1.columns)
print(df2.columns)

# 假设Excel文件中的列名为 'Key', 'ToolRemark', 'Translate'
# 如果不是这样的列名，你需要根据实际情况修改
df1.columns = ['Key', 'ToolRemark', 'Translate']
df2.columns = ['Key', 'ToolRemark', 'Translate']

# 合并两个DataFrame，保留所有行
merged_df = df1.merge(df2, on='Key', how='outer', suffixes=('_1026', '_1028'))

# 找出翻译不同的记录
diff_df = merged_df[(merged_df['Translate_1026'] != merged_df['Translate_1028'])]

# 输出不同的记录到新的Excel文件
output_file = 'freeze_panes.xlsx'
diff_df.to_excel(output_file, index=False)

# 使用openpyxl加载新创建的Excel文件
wb = load_workbook(output_file)
ws = wb.active

# 设置冻结首行
ws.freeze_panes = 'A2'

# 保存更改
wb.save(output_file)