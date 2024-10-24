import pandas as pd

# 加载Excel文件
df1 = pd.read_excel('266总表1022.xlsx')
df2 = pd.read_excel('266总表1023.xlsx')

# 检查列名，确保它们是一致的
print(df1.columns)
print(df2.columns)

# 假设Excel文件中的列名为 'ID', 'Key', 'Translate'
# 如果不是这样的列名，你需要根据实际情况修改
df1.columns = ['Key', 'ToolRemark', 'Translate']
df2.columns = ['Key', 'ToolRemark', 'Translate']

# 合并两个DataFrame，保留所有行
merged_df = df1.merge(df2, on='Key', how='outer', suffixes=('_1022', '_1023'))

# 找出翻译不同的记录
diff_df = merged_df[(merged_df['Translate_1022'] != merged_df['Translate_1023'])]

# 输出不同的记录到新的Excel文件
diff_df.to_excel('266总表1017与266总表1018.xlsx', index=False)