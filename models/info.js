var path = require("path");
let sequelize = require('../config/sequelize');

const modelName = path.basename(__filename, '.js');

// 企业基本信息表
const infoModel = sequelize.define(modelName, {
  id: {
    type: sequelize.Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    comment: '自增ID'
  },
  userId: {
    type: sequelize.Sequelize.STRING,
    comment: '用户ID'
  },
  orderId: {
    type: sequelize.Sequelize.STRING,
    comment: '订单ID'
  },
  status: {
    type: sequelize.Sequelize.STRING,
    comment: '订单状态' // 1 完成 || 0 未完成
  },
  // baseInfoModel
  creditCode: {
    type: sequelize.Sequelize.STRING,
    comment: '统一社会信用代码'
  },
  enterpriseName: {
    type: sequelize.Sequelize.STRING,
    comment: '企业名称'
  },
  corporate: {
    type: sequelize.Sequelize.STRING,
    comment: '法定代表人'
  },
  enterpriseReferred: {
    type: sequelize.Sequelize.STRING,
    comment: '企业简称'
  },
  establishmentTime: {
    type: sequelize.Sequelize.DATE,
    comment: '企业成立时间'
  },
  isListed: {
    type: sequelize.Sequelize.INTEGER,
    comment: '是否上市'
  },
  // 存code, 国家-城市
  officeLocation: {
    type: sequelize.Sequelize.STRING,
    comment: '企业办公地点'
  },
  // 存code, 国家-城市
  regiseteLocation: {
    type: sequelize.Sequelize.STRING,
    comment: '企业注册地点'
  },
  registeredCapital: {
    type: sequelize.Sequelize.STRING,
    comment: '注册资本'
  },
  registeredCurrencyType: {
    type: sequelize.Sequelize.STRING,
    comment: '注册资本币种'
  },
  paidInCapital: {
    type: sequelize.Sequelize.STRING,
    comment: '实收(实缴)资本(万元)'
  },
  paidInCurrencyType: {
    type: sequelize.Sequelize.STRING,
    comment: '实缴资本币种'
  },
  businessScope: {
    type: sequelize.Sequelize.TEXT,
    comment: '经营范围'
  },
  employeesCount: {
    type: sequelize.Sequelize.STRING,
    comment: '员工总人数'
  },
  primaryContact: {
    type: sequelize.Sequelize.STRING,
    comment: '主要联系人'
  },
  contactPhone: {
    type: sequelize.Sequelize.STRING,
    comment: '联系电话'
  },
  explainSituation: {
    type: sequelize.Sequelize.TEXT,
    comment: '企业认为需要说明的情况'
  },
  businessLicenseList: {
    type: sequelize.Sequelize.STRING,
    comment: '营业执照'
  },
  uploadFilesList: {
    type: sequelize.Sequelize.TEXT,
    comment: '企业认为需要上传的文件'
  },
  // shareholderInfoModel
  actualControllerName: {
    type: sequelize.Sequelize.TEXT,
    comment: '实际控制人姓名'
  },
  nationality: {
    type: sequelize.Sequelize.TEXT,
    comment: '国籍'
  },
  actualControllerGender: {
    type: sequelize.Sequelize.STRING,
    comment: '性别'
  },
  actualControllerBirth: {
    type: sequelize.Sequelize.DATE,
    comment: '出生年月'
  },
  actualControllerPhone: {
    type: sequelize.Sequelize.STRING,
    comment: '移动电话'
  },
  actualControllerOfficePhone: {
    type: sequelize.Sequelize.STRING,
    comment: '办公电话'
  },
  actualControllerResume: {
    type: sequelize.Sequelize.TEXT,
    comment: '实际控制人简历'
  },
  shareholdersList: {
    type: sequelize.Sequelize.TEXT,
    comment: '股东列表'
  },
  // financialInfoModel
  totalAssets: {
    type: sequelize.Sequelize.TEXT,
    comment: '总资产(万元)'
  },
  totalLiabilities: {
    type: sequelize.Sequelize.TEXT,
    comment: '总负债(万元)'
  },
  netAssets: {
    type: sequelize.Sequelize.TEXT,
    comment: '净资产(万元)'
  },
  revenue: {
    type: sequelize.Sequelize.TEXT,
    comment: '总收入(万元)'
  },
  grossMargin: {
    type: sequelize.Sequelize.TEXT,
    comment: '毛利率(%)'
  },
  totalCash: {
    type: sequelize.Sequelize.TEXT,
    comment: '经营活动现金净额(万元)'
  },
  nearestFinancialStatements: {
    type: sequelize.Sequelize.TEXT,
    comment: '最近两年及最近一期财务报表'
  },
  businessList: {
    type: sequelize.Sequelize.TEXT,
    comment: '业务列表'
  },
  industry: {
    type: sequelize.Sequelize.TEXT,
    comment: '企业行业'
  },
  mainPproducts: {
    type: sequelize.Sequelize.TEXT,
    comment: '主要产品'
  },
  customerType: {
    type: sequelize.Sequelize.TEXT,
    comment: '客户类型'
  },
  productUse: {
    type: sequelize.Sequelize.TEXT,
    comment: '产品用途'
  },
  businessModel: {
    type: sequelize.Sequelize.TEXT,
    comment: '商业模式概述'
  },
  uploadContractFiles: {
    type: sequelize.Sequelize.TEXT,
    comment: '上传合同文件'
  },
  uploadOtherFiles: {
    type: sequelize.Sequelize.TEXT,
    comment: '其他需要上传文件'
  },
  // businessInfo
  businessList: {
    type: sequelize.Sequelize.TEXT,
    comment: '业务列表'
  },
  industry: {
    type: sequelize.Sequelize.TEXT,
    comment: '企业行业'
  },
  mainPproducts: {
    type: sequelize.Sequelize.TEXT,
    comment: '主要产品'
  },
  customerType: {
    type: sequelize.Sequelize.TEXT,
    comment: '客户类型'
  },
  productUse: {
    type: sequelize.Sequelize.TEXT,
    comment: '产品用途'
  },
  businessModel: {
    type: sequelize.Sequelize.TEXT,
    comment: '商业模式概述'
  },
  distributionChannel: {
    type: sequelize.Sequelize.TEXT,
    comment: '销售渠道'
  },
  uploadContractFiles: {
    type: sequelize.Sequelize.TEXT,
    comment: '上传合同文件'
  },
  uploadOtherFiles: {
    type: sequelize.Sequelize.TEXT,
    comment: '其他需要上传文件'
  },
  // systemSituationInfo
  decisionSystem: {
    type: sequelize.Sequelize.TEXT,
    comment: '公司决策制度'
  },
  purchaseSystem: {
    type: sequelize.Sequelize.TEXT,
    comment: '采购相关管理制度'
  },
  salesSystem: {
    type: sequelize.Sequelize.TEXT,
    comment: '销售相关管理制度'
  },
  rdSystem: {
    type: sequelize.Sequelize.TEXT,
    comment: '技术研发制度'
  },
  productionManagementSystem: {
    type: sequelize.Sequelize.TEXT,
    comment: '生产管理制度'
  },
  qaSystem: {
    type: sequelize.Sequelize.TEXT,
    comment: '质量管理制度'
  },
  FinancialManagementSystem: {
    type: sequelize.Sequelize.TEXT,
    comment: '财务管理制度'
  },
  hrManagementSystem: {
    type: sequelize.Sequelize.TEXT,
    comment: '人力资源管理制度'
  },
  paySystem: {
    type: sequelize.Sequelize.TEXT,
    comment: '薪酬制度'
  },
  otherSystem: {
    type: sequelize.Sequelize.TEXT,
    comment: '其他各种制度'
  },
  // 所需服务
  selectedService: {
    type: sequelize.Sequelize.STRING,
    comment: '所需服务'
  },
  otherInfo: {
    type: sequelize.Sequelize.STRING,
    comment: '其他服务'
  }
}, {
    underscored: true,
    freezeTableName: true,
    timestamps: false
  })




module.exports = infoModel;







