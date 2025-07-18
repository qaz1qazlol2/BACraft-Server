LootJS.modifiers((event) => {
    event.addLootTableModifier(/.*chests\/.*/).pool((pool => {
        pool.randomChance(0.00001).addLoot("tacz:ammo_box")
        pool.setName("\u00a7c非洲之心")
        pool.addLore("\u00a7b世界上最大的钻石，璀璨夺目，象征永恒的爱")
        pool.addLore("\u00a7f这颗钻石有种\u00a76神奇\u00a7f的魔力，可以从中获取\u00a7c无限\u00a7f的弹药")
        pool.addNBT('{AllTypeCreative:1b,CustomModelData:1,HideFlags:96,display:{color:-1}}')
    }))
    event.addLootTableModifier(/.*chests\/.*/).pool((pool => {
        pool.anyDimension("minecraft:the_nether")
        pool.randomChance(0.0001).addLoot("tacz:ammo_box")
        pool.setName("\u00a7c非洲之心")
        pool.addLore("\u00a7b世界上最大的钻石，璀璨夺目，象征永恒的爱")
        pool.addLore("\u00a7f这颗钻石有种\u00a76神奇\u00a7f的魔力，可以从中获取\u00a7c无限\u00a7f的弹药")
        pool.addNBT('{AllTypeCreative:1b,CustomModelData:1,HideFlags:96,display:{color:-1}}')
    }))
    event.addLootTableModifier(/.*chests\/.*/).pool((pool => {
        pool.anyDimension("minecraft:the_end")
        pool.randomChance(0.005).addLoot("tacz:ammo_box")
        pool.setName("\u00a7c非洲之心")
        pool.addLore("\u00a7b世界上最大的钻石，璀璨夺目，象征永恒的爱")
        pool.addLore("\u00a7f这颗钻石有种\u00a76神奇\u00a7f的魔力，可以从中获取\u00a7c无限\u00a7f的弹药")
        pool.addNBT('{AllTypeCreative:1b,CustomModelData:1,HideFlags:96,display:{color:-1}}')
    }))
})