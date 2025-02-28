// 搜索框点击效果
// 
$('#mode span').click(function(event) {
        $('#mode span').removeClass('active');
        $(this).addClass('active');
        if ($(this).text() == 'Circles') {
            $('.texts text').hide();
            $('.nodes circle').show();
        } else {
            $('.texts text').show();
            $('.nodes circle').hide();
        }
    });
//选择主题
//
am4core.useTheme(am4themes_animated)
//内部数据绑定
var data = [
	{
		"name": "视觉测量", "details":"视觉检测就是用机器代替人眼来做测量和判断。",
		"children": 
		[
			{
				"name": "关键技术", "value": 30, 
				"children":
				[
					{
						"name": "被测目标", "value": 10
					}, 
					{
						"name": "伺服装置", "value": 10
					}, 
					{
						"name": "图像获取装置", "value": 10
					},
					{
						"name": "图像存储器", "value": 10
					},
					{
						"name": "光源", "value": 10
					},
					{
						"name": "数据处理", "value": 10
					}
				]
			},
		
			{
				"name": "平行视差", "value": 30,
				"children":
				[
					{
						"name": "双目视差", "value": 10
					},
					{
						"name": "深度距离", "value": 10
					}
				]
			},
			{
				"name": "机器视觉", "value": 30,
				"details":"机器视觉是人工智能正在快速发展的一个分支。\n简单说来，机器视觉就是用机器代替人眼来做测量和判断。",
				"children":
				[
					{
						"name": "图像处理", "value": 10,
						"details":"图像处理(image processing)，用计算机对图像进行分析，以达到所需结果的技术。"
					},
					{
						"name": "模式识别", "value": 10,
						"details":"模式识别就是通过计算机用数学技术方法来研究模式\n的自动处理和判读，把环境与客体统称为“模式”。"
					},
					{
						"name": "计算理论", "value": 10,
						"details":"计算理论(theory of computation)用来研究计算的过程与功效的数学理论。"
					},
					{
						"name": "实现算法", "value": 10,
						"details":"实现算法(Implementation algorithm)用数学或代码实现算法思想过程的数学理论。"
					},
					{
						"name": "表达", "value": 10
					},
					{
						"name": "硬件细节", "value": 10
					}
				]
			},
			{
				"name": "交叉学科", "value": 30,
				"children":
				[
					{
						"name": "计算机技术", "value": 10
					},
					{
						"name": "激光技术", "value": 10
					},
					{
						"name": "光电子学", "value": 10
					},
					{
						"name": "图像处理", "value": 10
					}
				]
			},
			{
				"name": "发展趋势", "value": 30,
				"children":
				[
					{
						"name": "高精度", "value": 10
					},
					{
						"name": "在线测量", "value": 10
					},
					{
						"name": "智能化", "value": 10
					},
					{
						"name": "非接触", "value": 10
					},
					{
						"name": "网络化", "value": 10
					}
				]
			}
		]
	},
	{
		"name": "感知器", "details":"感知器是人工神经网络中的一种典型结构， 它的主要的特点是结构简单，\n用收敛算法解决问题，推动神经网络研究。",
		"children": 
		[
			{
				"name": "神经元", "value": 30, 
				"children":
				[
					{
						"name": "前馈神经元", "value": 10
					}, 
					{
						"name": "卷积神经元", "value": 10
					}, 
					{
						"name": "解卷积神经元", "value": 10
					},
					{
						"name": "池化神经元", "value": 10
					},
					{
						"name": "插值神经元", "value": 10
					},
					{
						"name": "均值神经元", "value": 10
					}
				]
			},
		
			{
				"name": "多层感知机", "value": 30,
				"children":
				[
					{
						"name": "感知机", "value": 10
					},
					{
						"name": "神经网络", "value": 10
					}
				]
			},
			{
				"name": "线性", "value": 30,
				"children":
				[
					{
						"name": "非线性", "value": 10
					},
					{
						"name": "缩放", "value": 10
					},
					{
						"name": "旋转", "value": 10
					},
					{
						"name": "弯曲", "value": 10
					},
					{
						"name": "平移", "value": 10
					}
				]
			},
			{
				"name": "组成", "value": 30,
				"children":
				[
					{
						"name": "输入", "value": 10
					},
					{
						"name": "输出", "value": 10
					},
					{
						"name": "权值", "value": 10
					},
					{
						"name": "激活函数", "value": 10
					}
				]
			},
			{
				"name": "单层感知机", "value": 30,
				"children":
				[
					{
						"name": "线性组合器", "value": 10
					},
					{
						"name": "二值阈值元件", "value": 10
					}
				]
			}
		]
	},
	{
		"name": "梯度消失","details":"在神经网络中，当前面隐藏层的学习速率低于后面隐藏层的学习速率，\n即随着隐藏层数目的增加，分类准确率反而下降了。",
		"children": 
		[
			{
				"name": "梯度更新", "value": 30
			},
		
			{
				"name": "交叉熵代价函数", "value": 30,
				"children":
				[
					{
						"name": "代价函数", "value": 10
					},
					{
						"name": "样本", "value": 10
					},
					{
						"name": "实际值", "value": 10
					}
				]
			},
			{
				"name": "梯度变化", "value": 30
			},
			{
				"name": "梯度不稳定", "value": 30
			},
			{
				"name": "梯度爆炸", "value": 30
			}
		]
	},
	{
		"name": "语义识别","details":"计算机对文本进行自动分词，进一步整理句子结构，\n甚至理解句子含义。",
		"children": 
		[
			{
				"name": "词典匹配", "value": 30, 
				"children":
				[
					{
						"name": "情感词典", "value": 10
					}, 
					{
						"name": "程度词词典", "value": 10
					}, 
					{
						"name": "连词词典", "value": 10
					},
					{
						"name": "否定词典", "value": 10
					}
				]
			},
		
			{
				"name": "自动识别抽取", "value": 30,
				"children":
				[
					{
						"name": "基于事件元素驱动", "value": 10
					},
					{
						"name": "基于事件触发词驱动", "value": 10
					},
					{
						"name": "基于事件实例驱动", "value": 10
					}
				]
			},
			{
				"name": "评价对象抽取", "value": 30,
				"children":
				[
					{
						"name": "任务界定", "value": 10
					},
					{
						"name": "实体抽取和发现", "value": 10
					},
					{
						"name": "开放域关系抽取", "value": 10
					},
					{
						"name": "情感分析", "value": 10
					}
				]
			},
			{
				"name": "隐形马尔科夫模型", "value": 30,
				"children":
				[
					{
						"name": "马尔可夫过程", "value": 10
					},
					{
						"name": "隐马尔可夫模型", "value": 10
					},
					{
						"name": "模型评估", "value": 10
					},
					{
						"name": "解码问题", "value": 10
					},
					{
						"name": "参数评估", "value": 10
					}
				]
			},
			{
				"name": "属性抽取", "value": 30,
				"children":
				[
					{
						"name": "频率", "value": 10
					},
					{
						"name": "语义关系", "value": 10
					},
					{
						"name": "句法分析", "value": 10
					},
					{
						"name": "隐马尔可夫模型", "value": 10
					},
					{
						"name": "隐含属性的映射", "value": 10
					}
				]
			}
		]
	},
	{
		"name": "信息抽取","details":"信息抽取 （Information Extraction: IE）是把文本里包含的信息\n进行结构化处理，变成表格一样的组织形式。",
		"children": 
		[
			{
				"name": "文本结构", "value": 30, 
				"children":
				[
					{
						"name": "自由化", "value": 10
					}, 
					{
						"name": "半结构化", "value": 10
					}, 
					{
						"name": "结构化", "value": 10
					}
				]
			},
		
			{
				"name": "设计方法", "value": 30,
				"children":
				[
					{
						"name": "知识工程方法", "value": 10
					},
					{
						"name": "自动训练方法", "value": 10
					}
				]
			},
			{
				"name": "评价指标", "value": 30,
				"children":
				[
					{
						"name": "回召率", "value": 10
					},
					{
						"name": "查准率", "value": 10
					},
					{
						"name": "F1", "value": 10
					}
				]
			},
			{
				"name": "信息检索", "value": 30,
				"children":
				[
					{
						"name": "非结构化", "value": 10
					},
					{
						"name": "文本数据", "value": 10
					},
					{
						"name": "搜索引擎", "value": 10
					},
					{
						"name": "检索模型", "value": 10
					}
				]
			},
			{
				"name": "分装器", "value": 30,
				"children":
				[
					{
						"name": "WG", "value": 10
					},
					{
						"name": "IE", "value": 10
					},
					{
						"name": "归纳学习", "value": 10
					}
				]
			}
		]
	},
	{
		"name": "局部测光","details":"局部测光，TTL测光的一种方式，为的是确定画面中央部分的曝光，\n可对被摄体各个部位进行精密的测光。",
		"children": 
		[
			{
				"name": "点测光", "value": 30,
				"children":
				[
					{
						"name": "高精度", "value": 10
					},
					{
						"name": "曝光补偿", "value": 10
					}
				]
			},
		
			{
				"name": "拍摄主体", "value": 30,
				"children":
				[
					{
						"name": "拍摄方法", "value": 10
					},
					{
						"name": "计算摄影", "value": 10
					}
				]
			},
			{
				"name": "多区域测光", "value": 30,
				"children":
				[
					{
						"name": "反光率", "value": 10
					},
					{
						"name": "环境光比", "value": 10
					}
				]
			},
			{
				"name": "测光", "value": 30,
				"children":
				[
					{
						"name": "卷帘曝光", "value": 10
					},
					{
						"name": "全局曝光", "value": 10
					}
				]
			},
			{
				"name": "加权平均测光", "value": 30,
				"children":
				[
					{
						"name": "感光度", "value": 10
					},
					{
						"name": "图片质量", "value": 10
					}
				]
			}
		]
	},
	{
		"name": "语义识别","details":"计算机对文本进行自动分词，进一步整理句子结构，\n甚至理解句子含义。",
		"children": 
		[
			{
				"name": "词典匹配", "value": 30, 
				"children":
				[
					{
						"name": "情感词典", "value": 10
					}, 
					{
						"name": "程度词词典", "value": 10
					}, 
					{
						"name": "连词词典", "value": 10
					},
					{
						"name": "否定词典", "value": 10
					}
				]
			},
		
			{
				"name": "自动识别抽取", "value": 30,
				"children":
				[
					{
						"name": "基于事件元素驱动", "value": 10
					},
					{
						"name": "基于事件触发词驱动", "value": 10
					},
					{
						"name": "基于事件实例驱动", "value": 10
					}
				]
			},
			{
				"name": "评价对象抽取", "value": 30,
				"children":
				[
					{
						"name": "任务界定", "value": 10
					},
					{
						"name": "实体抽取和发现", "value": 10
					},
					{
						"name": "开放域关系抽取", "value": 10
					},
					{
						"name": "情感分析", "value": 10
					}
				]
			},
			{
				"name": "隐形马尔科夫模型", "value": 30,
				"children":
				[
					{
						"name": "马尔可夫过程", "value": 10
					},
					{
						"name": "隐马尔可夫模型", "value": 10
					},
					{
						"name": "模型评估", "value": 10
					},
					{
						"name": "解码问题", "value": 10
					},
					{
						"name": "参数评估", "value": 10
					}
				]
			},
			{
				"name": "属性抽取", "value": 30,
				"children":
				[
					{
						"name": "频率", "value": 10
					},
					{
						"name": "语义关系", "value": 10
					},
					{
						"name": "句法分析", "value": 10
					},
					{
						"name": "隐马尔可夫模型", "value": 10
					},
					{
						"name": "隐含属性的映射", "value": 10
					}
				]
			}
		]
	},
	{
		"name": "信息抽取","details":"信息抽取 （Information Extraction: IE）是把文本里包含的信息\n进行结构化处理，变成表格一样的组织形式。",
		"children": 
		[
			{
				"name": "文本结构", "value": 30, 
				"children":
				[
					{
						"name": "自由化", "value": 10
					}, 
					{
						"name": "半结构化", "value": 10
					}, 
					{
						"name": "结构化", "value": 10
					}
				]
			},
		
			{
				"name": "设计方法", "value": 30,
				"children":
				[
					{
						"name": "知识工程方法", "value": 10
					},
					{
						"name": "自动训练方法", "value": 10
					}
				]
			},
			{
				"name": "评价指标", "value": 30,
				"children":
				[
					{
						"name": "回召率", "value": 10
					},
					{
						"name": "查准率", "value": 10
					},
					{
						"name": "F1", "value": 10
					}
				]
			},
			{
				"name": "信息检索", "value": 30,
				"children":
				[
					{
						"name": "非结构化", "value": 10
					},
					{
						"name": "文本数据", "value": 10
					},
					{
						"name": "搜索引擎", "value": 10
					},
					{
						"name": "检索模型", "value": 10
					}
				]
			},
			{
				"name": "分装器", "value": 30,
				"children":
				[
					{
						"name": "WG", "value": 10
					},
					{
						"name": "IE", "value": 10
					},
					{
						"name": "归纳学习", "value": 10
					}
				]
			}
		]
	},
	{
		"name": "局部测光","details":"局部测光，TTL测光的一种方式，为的是确定画面中央部分的曝光，\n可对被摄体各个部位进行精密的测光。",
		"children": 
		[
			{
				"name": "点测光", "value": 30,
				"children":
				[
					{
						"name": "高精度", "value": 10
					},
					{
						"name": "曝光补偿", "value": 10
					}
				]
			},
		
			{
				"name": "拍摄主体", "value": 30,
				"children":
				[
					{
						"name": "拍摄方法", "value": 10
					},
					{
						"name": "计算摄影", "value": 10
					}
				]
			},
			{
				"name": "多区域测光", "value": 30,
				"children":
				[
					{
						"name": "反光率", "value": 10
					},
					{
						"name": "环境光比", "value": 10
					}
				]
			},
			{
				"name": "测光", "value": 30,
				"children":
				[
					{
						"name": "卷帘曝光", "value": 10
					},
					{
						"name": "全局曝光", "value": 10
					}
				]
			},
			{
				"name": "加权平均测光", "value": 30,
				"children":
				[
					{
						"name": "感光度", "value": 10
					},
					{
						"name": "图片质量", "value": 10
					}
				]
			}
		]
	}
];
//初始化力导向树
var chart = am4core.create("chartdiv", am4plugins_forceDirected.ForceDirectedTree);
var series = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries());

// data绑定
series.dataFields.value = "value";
series.dataFields.name = "name";
series.dataFields.children = "children";

chart.data = data;
//外部数据绑定(目前尚未解决)
// chart.dataSource.url = "file:///../json/map1.json";
// chart.dataSource.parser = new am4core.JSONParser();
// chart.dataSource.parser.options.emptyAs = 0;


// 样式
series.links.template.distance = 1.5;
series.links.template.strokeWidth = 1.5;
series.links.template.strokeOpacity = 0.75;
series.Radiumins = am4core.percent(0.8);
series.minRadius = 30;
series.maxRadius = 80;
series.nodes.template.label.fontSize = 12;
series.nodes.template.outerCircle.filters.push(new am4core.DropShadowFilter());
series.maxLevels = 1;
series.nodes.template.label.text = "{name}";
series.nodes.template.tooltipText = "{name}: [bold]{details}[/]";
