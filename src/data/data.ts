interface Type {
    id: string,
    name: string
}

interface TypeNode extends Type {
    children?: TypeNode[]
}

interface Formula {
    id: string,
    dateBorn: string,
    dateErased?: string,
    name: string,
    content: string,
    types: {
        name: string,
        type: {
            selectedId: string,
            tree: TypeNode
        }
    }[]
}
interface EKPOKGroup {
    dateBorn: string,
    dateErased?: string,
    name: string,
    id: string,
    ekpoks: EKPOK[]
}
interface EKPOK {
    dateBorn: string,
    dateErased?: string,
    id: string,
    name: string,
    mnemonic: string,
    schema: string,
    user: string
    formulas: Formula[]
}

const data: EKPOKGroup[] = [
    {
        dateBorn: '24.08.2022',
        id: '1ekpgrp',
        name: 'N1_LA',
        ekpoks: [
            {
                dateBorn: '24.08.2022',
                id: '1ekp123',
                name: 'N1_LA_AVG Середнє зважене',
                mnemonic: 'ekpok_n1_la_avg',
                schema: 'z22v2',
                user: 'Тертишний Владислав Юрійович',
                formulas: [
                    {
                        dateBorn: '24.08.2022',
                        id: '1ekpf1',
                        name: 'N1_LA_AVG Formula 1',
                        content:
                            `variable a,b,c,d,p59002,p55001,p52000,p51002,p31005,p52001,p66000,p67000,p68000,p69000,p50202,p50201,p61000,result;\nsource zn540;\ndim resource default p02_skap_61000;\ndim banks default екземпляр -> spr_idis;--all;\np61000=sum(::) ;\nsource zn540;\ndim resource default p02_skap_50201;\ndim banks default екземпляр -> spr_idis;--all;\np50201=sum(::) ;\nsource zn540;\ndim resource default p02_skap_50202;\ndim banks default екземпляр -> spr_idis;--all;\np50202=sum(::) ;\nsource zn540;\ndim resource default p02_skap_66000;\ndim banks default екземпляр -> spr_idis;--all;\np66000=sum(::) ;\nsource zn540;\ndim resource default p02_skap_67000;\ndim banks default екземпляр -> spr_idis;--all;\np67000=sum(::) ;\nsource zn540;\ndim resource default p02_skap_68000;\ndim banks default екземпляр -> spr_idis;--all;\np68000=sum(::) ;\nsource zn540;\ndim resource default p02_skap_69000;\ndim banks default екземпляр -> spr_idis;--all;\np69000=sum(::) ;\nsource zn540;\ndim resource default p02_skap_52001;\ndim banks default екземпляр -> spr_idis;--all;\np52001=sum(::) ;\nsource zn540;\ndim resource default p02_skap_31005;\ndim banks default екземпляр -> spr_idis;--all;\np31005=sum(::) ;\nsource zn540;\ndim resource default p02_skap_51002;\ndim banks default екземпляр -> spr_idis;--all;\np51002=sum(::) ;\nsource zn540;\ndim resource default p02_skap_52000;\ndim banks default екземпляр -> spr_idis;--all;\np52000=sum(::) ;\nsource zn540;\ndim resource default p02_skap_55001;\ndim banks default екземпляр -> spr_idis;--all;\np55001=sum(::) ;\nsource zn540;\ndim resource default p02_skap_59002;\ndim banks default екземпляр -> spr_idis;--all;\np59002=sum(::) ;\na=p61000-(p50201-p50202-(p66000+p67000+p68000-p69000));\nb=p52001*p31005;\nc=p51002+p52000+p55001+p59002;\nd=iif(c==0,1,c);\nresult=a-b/d;\nreturn result;\n/*\nvariable a,b,c,d,result;\nsource zn540;\ndimension banks default екземпляр->bank;\ndimension resource all values;\na=p02_skap_61000:-(p02_skap_50201:-p02_skap_50202:-(p02_skap_66000:+p02_skap_67000:+p02_skap_68000:-p02_skap_69000:));\nb=p02_skap_52001:*p02_skap_31005:;\nc=p02_skap_51002:+p02_skap_52000:+p02_skap_55001:+p02_skap_59002:;\nd=iif(c==0,1,c);\n--result= p02_skap_61000:-(p02_skap_50201:-p02_skap_50202:-(p02_skap_66000:+p02_skap_67000:+p02_skap_68000:-p02_skap_69000:)) - (p02_skap_52001:*p02_skap_31005:/(p02_skap_51002:+p02_skap_55001:+p02_skap_59002:));\nresult=a-b/d;\nreturn result;\n*/`,
                        types: [
                            {
                                name: 'Резидентність',
                                type: {
                                    selectedId: 'type1',
                                    tree: {
                                        id: 'type0',
                                        name: 'Банк',
                                        children: [
                                            {
                                                id: 'type1',
                                                name: 'Приватбанк'
                                            },
                                            {
                                                id: 'type2',
                                                name: 'Ощадбанк'
                                            },
                                        ],
                                    }
                                }
                            },
                            {
                                name: 'Валюта',
                                type: {
                                    selectedId: 'type2',
                                    tree: {
                                        id: 'type0',
                                        name: 'Основні',
                                        children: [
                                            {
                                                id: 'type1',
                                                name: 'Гривня'
                                            },
                                            {
                                                id: 'type2',
                                                name: 'Долар'
                                            },
                                        ],
                                    }
                                }
                            },
                        ]
                    },
                    {
                        dateBorn: '24.08.2022',
                        dateErased: '25.08.2022',
                        id: '1ekpf2',
                        name: 'N1_LA_AVG Formula 2',
                        content:
                            `змінна result;\nджерело zn540\nвимір resource all values;\nвимір time умовчання get_month4day(фільтр#time);\ndimension idku all values;\nresult = p02_skap_53001::;\n--b = : + p02_ekn_100->resource:;\n--джерело zn1n11\n--вимір resource all;\n--вимір time умовчання get_decade4day(фільтр#time);\n--c = : + p02_ekn_100:;\nповернути result;`,
                        types: [
                            {
                                name: 'Резидентність',
                                type: {
                                    selectedId: 'type1',
                                    tree: {
                                        id: 'type0',
                                        name: 'Банк',
                                        children: [
                                            {
                                                id: 'type1',
                                                name: 'Приватбанк'
                                            },
                                            {
                                                id: 'type2',
                                                name: 'Ощадбанк'
                                            },
                                        ],
                                    }
                                }
                            },
                            {
                                name: 'Валюта',
                                type: {
                                    selectedId: 'type2',
                                    tree: {
                                        id: 'type0',
                                        name: 'Основні',
                                        children: [
                                            {
                                                id: 'type1',
                                                name: 'Гривня'
                                            },
                                            {
                                                id: 'type2',
                                                name: 'Долар'
                                            },
                                        ],
                                    }
                                }
                            },
                            {
                                name: 'RO020',
                                type: {
                                    selectedId: 'R0201',
                                    tree: {
                                        id: 'r0200',
                                        name: 'R030 Усього',
                                        children: [
                                            {
                                                id: 'r0210',
                                                name: 'ODR030 Open Data'
                                            },
                                            {
                                                id: 'R0201',
                                                name: 'R030 Код валюти або банківського металу'
                                            },
                                            {
                                                id: 'R0202',
                                                name: 'R031 Групи валют',
                                                children: [
                                                    {
                                                        id: 'R0302',
                                                        name: 'R030 Код валюти або банківського металу 1'
                                                    }
                                                ]

                                            },
                                        ],
                                    }
                                }
                            },
                        ]
                    }
                ]
            },
        ]
    },
    {
        dateBorn: '25.08.2022',
        id: '2ekpgrp',
        name: 'V2_ZT',
        ekpoks: [
            {
                dateBorn: '24.08.2022',
                id: '2ekp3321',
                name: 'V2_ZT SUM',
                mnemonic: 'ekpok_v2_zt_sum',
                schema: 'b430_132',
                user: 'Федоров Дмитро Іванович',
                formulas: [
                    {
                        dateBorn: '24.08.2022',
                        id: '1ekpfasdf1',
                        name: 'V2_ZT SUM Average',
                        content:
                            `/*змінна*/  variable result,a,b,c,p5030,nkr,d_nkr;/*,a,b,c,d,BaseResult  ;*/\n/*джерело*/ source zn540;\n/*вимір*/   dimension resource all values;\ndimension idku all values;\n/*-a+b-c*/\nnkr=POSITIVE(p02_skap_64000::-p02_skap_65000::);\np5030=p02_skap_58003::;\nd_nkr=POSITIVE(nkr-p5030);\nb=p02_skap_66000::+p02_skap_67000::-p02_skap_66001::;\na=p02_skap_59000::+p02_skap_52002::+p02_skap_52003::;\nc=p02_skap_69000::;\nc=IIF(c>b,b,c);\nresult=POSITIVE(b-a-c+d_nkr);\n/*d_nkr - сума, що зменьшує результат поточного року або "а"*/\nreturn/*повернути*/ result;`,
                        types: [
                            {
                                name: 'Резидентність',
                                type: {
                                    selectedId: 'type1',
                                    tree: {
                                        id: 'type0',
                                        name: 'Банк',
                                        children: [
                                            {
                                                id: 'type1',
                                                name: 'Приватбанк'
                                            },
                                            {
                                                id: 'type2',
                                                name: 'Ощадбанк'
                                            },
                                        ],
                                    }
                                }
                            },
                            {
                                name: 'Валюта',
                                type: {
                                    selectedId: 'type2',
                                    tree: {
                                        id: 'type0',
                                        name: 'Основні',
                                        children: [
                                            {
                                                id: 'type1',
                                                name: 'Гривня'
                                            },
                                            {
                                                id: 'type2',
                                                name: 'Долар'
                                            },
                                        ],
                                    }
                                }
                            },
                        ]
                    },
                    {
                        dateBorn: '24.08.2022',
                        id: '1ekpfasdf2',
                        name: 'V2_ZT SUM Median',
                        content:
                            `/*змінна*/  variable result,a,b,c,p5030,nkr,d_nkr;/*,a,b,c,d,BaseResult  ;*/\n/*джерело*/ source zn540;\n/*вимір*/   dimension resource all values;\ndimension idku all values;\n/*-a+b-c*/\nnkr=POSITIVE(p02_skap_64000::-p02_skap_65000::);\np5030=p02_skap_58003::;\nd_nkr=POSITIVE(nkr-p5030);\nb=p02_skap_66000::+p02_skap_67000::-p02_skap_66001::;\na=p02_skap_59000::+p02_skap_52002::+p02_skap_52003::;\nc=p02_skap_69000::;\nc=IIF(c>b,b,c);\nresult=POSITIVE(b-a-c+d_nkr);\n/*d_nkr - сума, що зменьшує результат поточного року або "а"*/\nreturn/*повернути*/ result;`,
                        types: [
                            {
                                name: 'Резидентність',
                                type: {
                                    selectedId: 'type1',
                                    tree: {
                                        id: 'type0',
                                        name: 'Банк',
                                        children: [
                                            {
                                                id: 'type1',
                                                name: 'Приватбанк'
                                            },
                                            {
                                                id: 'type2',
                                                name: 'Ощадбанк'
                                            },
                                        ],
                                    }
                                }
                            },
                            {
                                name: 'Валюта',
                                type: {
                                    selectedId: 'type2',
                                    tree: {
                                        id: 'type0',
                                        name: 'Основні',
                                        children: [
                                            {
                                                id: 'type1',
                                                name: 'Гривня'
                                            },
                                            {
                                                id: 'type2',
                                                name: 'Долар'
                                            },
                                        ],
                                    }
                                }
                            },
                        ]
                    }
                ]
            },
        ]
    },
    {
        dateBorn: '22.08.2022',
        id: '1ekpgrp22',
        name: 'LR8_12331 Збалансовані активи',
        ekpoks: [
            {
                dateBorn: '24.08.2022',
                id: '1ekpasd1',
                name: 'N1_LA_AVG Середнє зважене',
                mnemonic: 'ekpok_n1_la_avg',
                schema: 'z22v2',
                user: 'Тертишний Владислав Юрійович',
                formulas: [
                    {
                        dateBorn: '24.08.2022',
                        id: '1ekpf1',
                        name: 'N1_LA_AVG Formula 1',
                        content:
                            `/*змінна*/  variable result;\n/*джерело*/ source zn540;\n/*вимір*/   dimension resource all values;\ndimension idku all values;\nresult=p02_skap_66000_1b::-p02_skap_66000_1g::;\nreturn/*повернути*/ result;`,
                        types: [
                            {
                                name: 'Резидентність',
                                type: {
                                    selectedId: 'type1',
                                    tree: {
                                        id: 'type0',
                                        name: 'Банк',
                                        children: [
                                            {
                                                id: 'type1',
                                                name: 'Приватбанк'
                                            },
                                            {
                                                id: 'type2',
                                                name: 'Ощадбанк'
                                            },
                                        ],
                                    }
                                }
                            },
                            {
                                name: 'Валюта',
                                type: {
                                    selectedId: 'type2',
                                    tree: {
                                        id: 'type0',
                                        name: 'Основні',
                                        children: [
                                            {
                                                id: 'type1',
                                                name: 'Гривня'
                                            },
                                            {
                                                id: 'type2',
                                                name: 'Долар'
                                            },
                                        ],
                                    }
                                }
                            },
                        ]
                    },
                    {
                        dateBorn: '24.08.2022',
                        id: '1ekpf2',
                        name: 'N1_LA_AVG Formula 2',
                        content:
                            `змінна a1,a2,a3,a4,a5,a6,a8,a9,s3,s4,s5,s6,b;\nджерело zn1n11;\nвимір resource всі значення;\na1 = pn1_11_1411: ; -- R020 з T01\na2 = pn1_11_1412: ; -- R020 з TA7\na3 = pn1_11_1413: ; -- 2920А-2920П\na4 = pn1_11_1414: ; -- 2924А-2924П\na5 = pn1_11_1415: ; -- 3739А-3739П\na6 = pn1_11_1416: - pn1_11_2125: + pn1_11_2105:; -- 1500А+1502+... - PKOD(73:78) - PKOD(B0),NKB(3,42,299) з #8B : вх.463-18\n--a7 = pn1_11_1417: ; -- R020 з T8A       29-114/3334 04.04.2012 (вх.76-12), вилучено 17.02.2014 №В/40-117/8865\na8 = pn1_11_2128: ; -- PKOD(87,89,90)   40-117/1391 28.03.2012 (вх.71-12)\na9 = pn1_11_1418: ; -- 9500/3 з TC5     40-117/5377 05.12.2012 (вх.209-12)\ns3 = iif(a3>0, a3, 0);\ns4 = iif(a4>0, a4, 0);\ns5 = iif(a5>0, a5, 0);\ns6 = iif(a6>0, a6, 0);\nb = a1 + a2 + a9 + s3 + s4 + s5 + s6 - a8;\nповернути b;`,
                        types: [
                            {
                                name: 'Резидентність',
                                type: {
                                    selectedId: 'type1',
                                    tree: {
                                        id: 'type0',
                                        name: 'Банк',
                                        children: [
                                            {
                                                id: 'type1',
                                                name: 'Приватбанк'
                                            },
                                            {
                                                id: 'type2',
                                                name: 'Ощадбанк'
                                            },
                                        ],
                                    }
                                }
                            },
                            {
                                name: 'Валюта',
                                type: {
                                    selectedId: 'type2',
                                    tree: {
                                        id: 'type0',
                                        name: 'Основні',
                                        children: [
                                            {
                                                id: 'type1',
                                                name: 'Гривня'
                                            },
                                            {
                                                id: 'type2',
                                                name: 'Долар'
                                            },
                                        ],
                                    }
                                }
                            },
                        ]
                    }
                ]
            },{
                dateBorn: '24.08.2022',
                dateErased: '25.08.2022',
                id: '1ekpasd1231',
                name: 'N1_LA_AVG Медіанне значення',
                mnemonic: 'ekpok_n1_la_avg',
                schema: 'z22v2',
                user: 'Марковська Наталія',
                formulas: [
                    {
                        dateBorn: '24.08.2022',
                        id: '1ekpf1',
                        name: 'N1_LA_AVG Formula 1',
                        content:
                            `змінна b;\nджерело zn1n11;\nвимір resource всі значення;\nвимір time умовчання get_decade4day(фільтр#time);\nb = pn1_11_2156:;\nповернути b;`,
                        types: [
                            {
                                name: 'Резидентність',
                                type: {
                                    selectedId: 'type1',
                                    tree: {
                                        id: 'type0',
                                        name: 'Банк',
                                        children: [
                                            {
                                                id: 'type1',
                                                name: 'Приватбанк'
                                            },
                                            {
                                                id: 'type2',
                                                name: 'Ощадбанк'
                                            },
                                        ],
                                    }
                                }
                            },
                            {
                                name: 'Валюта',
                                type: {
                                    selectedId: 'type2',
                                    tree: {
                                        id: 'type0',
                                        name: 'Основні',
                                        children: [
                                            {
                                                id: 'type1',
                                                name: 'Гривня'
                                            },
                                            {
                                                id: 'type2',
                                                name: 'Долар'
                                            },
                                        ],
                                    }
                                }
                            },
                        ]
                    },
                    {
                        dateBorn: '24.08.2022',
                        id: '1ekpf2',
                        name: 'N1_LA_AVG Formula 2',
                        content:
                            `return a + b;`,
                        types: [
                            {
                                name: 'Резидентність',
                                type: {
                                    selectedId: 'type1',
                                    tree: {
                                        id: 'type0',
                                        name: 'Банк',
                                        children: [
                                            {
                                                id: 'type1',
                                                name: 'Приватбанк'
                                            },
                                            {
                                                id: 'type2',
                                                name: 'Ощадбанк'
                                            },
                                        ],
                                    }
                                }
                            },
                            {
                                name: 'Валюта',
                                type: {
                                    selectedId: 'type2',
                                    tree: {
                                        id: 'type0',
                                        name: 'Основні',
                                        children: [
                                            {
                                                id: 'type1',
                                                name: 'Гривня'
                                            },
                                            {
                                                id: 'type2',
                                                name: 'Долар'
                                            },
                                        ],
                                    }
                                }
                            },
                        ]
                    }
                ]
            },
        ]
    },
    {
        dateBorn: '21.08.2022',
        id: '2enkzprp',
        name: 'NKZP Пов\'язані компанії',
        ekpoks: [
            {
                dateBorn: '24.08.2022',
                id: '2e112kp',
                name: 'V2_ZT SUM',
                mnemonic: 'ekpok_v2_zt_sum',
                schema: 'b430_132',
                user: 'Бармакова Олена Володимирівна',
                formulas: [
                    {
                        dateBorn: '24.08.2022',
                        id: '1ekpfasdf1',
                        name: 'V2_ZT SUM Average',
                        content:
                            `here we go again`,
                        types: [
                            {
                                name: 'Резидентність',
                                type: {
                                    selectedId: 'type1',
                                    tree: {
                                        id: 'type0',
                                        name: 'Банк',
                                        children: [
                                            {
                                                id: 'type1',
                                                name: 'Приватбанк'
                                            },
                                            {
                                                id: 'type2',
                                                name: 'Ощадбанк'
                                            },
                                        ],
                                    }
                                }
                            },
                            {
                                name: 'Валюта',
                                type: {
                                    selectedId: 'type2',
                                    tree: {
                                        id: 'type0',
                                        name: 'Основні',
                                        children: [
                                            {
                                                id: 'type1',
                                                name: 'Гривня'
                                            },
                                            {
                                                id: 'type2',
                                                name: 'Долар'
                                            },
                                        ],
                                    }
                                }
                            },
                        ]
                    },
                    {
                        dateBorn: '24.08.2022',
                        id: '1ekpfasdf2',
                        name: 'V2_ZT SUM Median',
                        content:
                            `console.log("error")`,
                        types: [
                            {
                                name: 'Резидентність',
                                type: {
                                    selectedId: 'type1',
                                    tree: {
                                        id: 'type0',
                                        name: 'Банк',
                                        children: [
                                            {
                                                id: 'type1',
                                                name: 'Приватбанк'
                                            },
                                            {
                                                id: 'type2',
                                                name: 'Ощадбанк'
                                            },
                                        ],
                                    }
                                }
                            },
                            {
                                name: 'Резидентність',
                                type: {
                                    selectedId: 'type1',
                                    tree: {
                                        id: 'type0',
                                        name: 'Банк',
                                        children: [
                                            {
                                                id: 'type1',
                                                name: 'Приватбанк'
                                            },
                                            {
                                                id: 'type2',
                                                name: 'Ощадбанк'
                                            },
                                        ],
                                    }
                                }
                            },
                            {
                                name: 'Резидентність',
                                type: {
                                    selectedId: 'type1',
                                    tree: {
                                        id: 'type0',
                                        name: 'Банк',
                                        children: [
                                            {
                                                id: 'type1',
                                                name: 'Приватбанк'
                                            },
                                            {
                                                id: 'type2',
                                                name: 'Ощадбанк'
                                            },
                                        ],
                                    }
                                }
                            },
                            {
                                name: 'Резидентність',
                                type: {
                                    selectedId: 'type1',
                                    tree: {
                                        id: 'type0',
                                        name: 'Банк',
                                        children: [
                                            {
                                                id: 'type1',
                                                name: 'Приватбанк'
                                            },
                                            {
                                                id: 'type2',
                                                name: 'Ощадбанк'
                                            },
                                        ],
                                    }
                                }
                            },
                            {
                                name: 'Резидентність',
                                type: {
                                    selectedId: 'type1',
                                    tree: {
                                        id: 'type0',
                                        name: 'Банк',
                                        children: [
                                            {
                                                id: 'type1',
                                                name: 'Приватбанк'
                                            },
                                            {
                                                id: 'type2',
                                                name: 'Ощадбанк'
                                            },
                                        ],
                                    }
                                }
                            },
                            
                            {
                                name: 'Валюта',
                                type: {
                                    selectedId: 'type2',
                                    tree: {
                                        id: 'type0',
                                        name: 'Основні',
                                        children: [
                                            {
                                                id: 'type1',
                                                name: 'Гривня'
                                            },
                                            {
                                                id: 'type2',
                                                name: 'Долар'
                                            },
                                        ],
                                    }
                                }
                            },
                            {
                                name: 'Валюта',
                                type: {
                                    selectedId: 'type2',
                                    tree: {
                                        id: 'type0',
                                        name: 'Основні',
                                        children: [
                                            {
                                                id: 'type1',
                                                name: 'Гривня'
                                            },
                                            {
                                                id: 'type2',
                                                name: 'Долар'
                                            },
                                        ],
                                    }
                                }
                            },
                            {
                                name: 'Валюта',
                                type: {
                                    selectedId: 'type2',
                                    tree: {
                                        id: 'type0',
                                        name: 'Основні',
                                        children: [
                                            {
                                                id: 'type1',
                                                name: 'Гривня'
                                            },
                                            {
                                                id: 'type2',
                                                name: 'Долар'
                                            },
                                        ],
                                    }
                                }
                            },
                            {
                                name: 'Валюта',
                                type: {
                                    selectedId: 'type2',
                                    tree: {
                                        id: 'type0',
                                        name: 'Основні',
                                        children: [
                                            {
                                                id: 'type1',
                                                name: 'Гривня'
                                            },
                                            {
                                                id: 'type2',
                                                name: 'Долар'
                                            },
                                        ],
                                    }
                                }
                            },
                            {
                                name: 'Валюта',
                                type: {
                                    selectedId: 'type2',
                                    tree: {
                                        id: 'type0',
                                        name: 'Основні',
                                        children: [
                                            {
                                                id: 'type1',
                                                name: 'Гривня'
                                            },
                                            {
                                                id: 'type2',
                                                name: 'Долар'
                                            },
                                        ],
                                    }
                                }
                            },
                            {
                                name: 'Валюта',
                                type: {
                                    selectedId: 'type2',
                                    tree: {
                                        id: 'type0',
                                        name: 'Основні',
                                        children: [
                                            {
                                                id: 'type1',
                                                name: 'Гривня'
                                            },
                                            {
                                                id: 'type2',
                                                name: 'Долар'
                                            },
                                        ],
                                    }
                                }
                            },
                            {
                                name: 'Валюта',
                                type: {
                                    selectedId: 'type2',
                                    tree: {
                                        id: 'type0',
                                        name: 'Основні',
                                        children: [
                                            {
                                                id: 'type1',
                                                name: 'Гривня'
                                            },
                                            {
                                                id: 'type2',
                                                name: 'Долар'
                                            },
                                        ],
                                    }
                                }
                            },
                        ]
                    }
                ]
            },
        ]
    }
]




export { data }
export type { Type, TypeNode, EKPOK, EKPOKGroup, Formula }