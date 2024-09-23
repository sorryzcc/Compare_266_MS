const tableMSData = [
    { Key: 'Aeos_Tech_Hide_01_Dec', Translate: '每次脱战后隐身10秒。' },
    {
      Key: 'Aeos_Tech_Reborn_01_Dec',
      Translate: '受到最后一击瞬间回复大量体力(75秒冷却)。'
    },
    {
      Key: 'Aeos_Tech_Skill_01g_Dec',
      Translate: '招式的冷却-15%，成功得分再-5%(最多5层)。'
    },
    {
      Key: 'Aeos_Tech_Skill_04g_Dec',
      Translate: '对战道具的冷却-15%，成功得分再-5%(最多5层)。'
    },
    {
      Key: 'Aeos_Tech_Score_13h_Dec',
      Translate: '普攻击中对方宝可梦时会偷取20%的携带分(5秒冷却)。'
    },
    {
      Key: 'Aeos_Tech_Smite_01h_Dec',
      Translate: '普攻可以立刻打倒一只小型野生宝可梦(15秒冷却)。'
    },
    { Key: 'Aeos_Tech_Sight_01_Dec', Translate: '视野扩大，每15秒照亮隐身单位。' }]

    const table266Data = [ 
        { Key: 'Aeos_Tech_Hide_01_Dec', Translate: '每次脱战后隐身10秒。' },
        {
          Key: 'Aeos_Tech_Reborn_01_Dec',
          Translate: '受到最后一击瞬间回复大量体力(777775秒冷却)。'
        }]

        let newData = []
        帮我生成一个新数组，对比tableMSData与table266Data的key，
        如果key一样，Translate也一样，则新数组的key、Translate、ranslate266不要。
        如果key一样，Translate不一样，则新数组的Translate这一列取tableMSData的Translate，Translate266值取table266Data的Translate。
        如果tableMSData里有的key，而table266Data没有，则新数组Translate的值取tableMSData的Translate，Translate266值为空。