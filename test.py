import pandas as pd

# 加载Excel文件
df1 = pd.read_excel('266总表.xlsx')
df2 = pd.read_excel('MS总表.xlsx')

# 检查列名，确保它们是一致的
print(df1.columns)
print(df2.columns)

# 假设Excel文件中的列名为 'Key', 'ToolRemark', 'Translate'
# 如果不是这样的列名，你需要根据实际情况修改
df1.columns = ['Key', 'ToolRemark', 'Translate']
df2.columns = ['Key', 'ToolRemark', 'Translate']

# 合并两个DataFrame，保留所有行
merged_df = df1.merge(df2, on='Key', how='outer', suffixes=('_266', '_MS'))

# 找出翻译不同的记录
diff_df = merged_df[(merged_df['Translate_266'] != merged_df['Translate_MS'])]

# 输出不同的记录到新的Excel文件
diff_df.to_excel('266与MS.xlsx', index=False)