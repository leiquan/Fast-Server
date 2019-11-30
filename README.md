### Agile Server

##### A simply, fast, completely Node.js server solution, based on KOA.

简单快速的 、性能强劲的、功能齐全的 node 服务器解决方案合集，基于 KOA。 


本项目涵盖的常用功能或规范有：

    数据库操作（增删改查、求和、计数、模糊搜索、关联查询、事务）；

    文件上传

    定时任务、计划事件；

    中间件；

    数据前置、后置格式化；

    公共服务抽取；

    用户权限认证；

    redis 缓存 session；

    短信验证码发放；

    webhook 自动上线；

    数据库定时备份；

    单元测试；

    任务队列；

    事件模型；


#### 项目背景：

* 通用业务高度重复

        在开发一个常规服务器业务的时候，我们能够发现，绝大部分接口，都是在进行数据库的增删改查操作，这是一个非常重复劳动，这里必须得到简化，以提高开发速度。

        开发中，我们对数据库的操作，分为两类：单表操作和多表操作。针对这两类常见业务，我们对其进行了封装和规范，提高其复用程度，提高其开发效率。

* 开发人员习惯不同

        一千个工程师，或许有一千种开发风格，很多时候，这些风格并没有好坏之分，只有喜好与否。而这种喜好，很多时候导致重复造轮子的情况发生。统一其开发习惯，是一件提高效率的事情，每个人的想法不一样，简单的想法最容易被接受和理解。

* 项目架构不合理，难以扩展

        小型项目中，扩展性的问题不必考虑太多，但是一旦项目到了一定的规模，就会非常的麻烦。比如，公用业务的调用问题；比如，用户的授权问题；比如，接口数量巨大导致的项目结构问题...等等，这些问题都需要去解决，并且需要一种可扩展的、稳定、简单的方式去解决。

针对以上这些问题，组织了这样的一个解决方案，Agile Server：

* 复用

        高度复用关键代码，节省大量人力，并且提高其可靠性

* 简单

        以文件和文件夹这种最基本、简单的方式来组织代码，完全避免封装，直观、简单、易定位问题，也容易最低成本的迁就工程师们的习惯

* 预定义规范

        针对常见的功能，考虑项目本身变的大而复杂的可能，做了非常合理的预定义配置：从项目结构，到功能设置...在此约定下，可以保证可持续开发，合理的预定义规范，可以保证代码的持久健壮性


#### 代码结构：

    -- config 配置文件
        -- env 环境变量配置
        -- globalVariable 全局变量统一配置
        -- loginAuth 需要登录的 URL 的配置，会在请求的时候进行过滤
        -- sequelize MySQL 数据库配置

    -- dao 数据操作方法，自带有基本方法，可自定义方法，完整方法请参考 book

    -- models 数据模型，将会同步到数据库

    -- router 映射地址，所有的 api 操作

    -- test  单元测试文件夹， 所有的测试用例

    -- utils 插件和库
        -- event 事件通知文件夹
        -- cron 定时任务，注意引入即开启
        -- lib 各种库文件代码
        -- midware 自定义的 KOA 中间件，请注意开发格式
        -- formater，格式器，router 的后置处理，比如，将一个包含唯一对象的数组转换成一个对象，或者对返回值进行处理操作
        -- interceptor，拦截器，router 的前置处理，比如，参数去除空值、进行权限校验等公用方法
        -- service 抽象出来的公共服务，以求代码能够在多种场合被直接复用，比如：一段既可以在响应 HTTP 请求，也可以在定时任务中执行的代码，这样定时任务可以直接调用这个 service，而不用通过 HTTP 来调用这段代码；因此，service 应该是函数。注意：service 和 lib 的区别在于，lib 提供公共方法，而 service 则针对具体业务

#### 运行启动(确保已经安装了node)：

    npm install     （安装依赖）

    npm start       （启动开发）

    npm run pm2     （线上部署）

    npm run test    （单元测试）

#### 技术框架：

    后端框架：KOA

    数据模型：Sequelize

    日志工具：Log4JS

#### 基本开发步骤：

    -- 1.定义 model，修改数据库字段定义，直接从以前的 model 文件复制修改即可

    -- 2.定义 dao，直接复制一个基本的 dao 就好，比如 book，甚至代码都不用动；如果有复杂数据库操作，需要单加方法，比如关联查询，请参考 book

    -- 3.定义 router 也就是 api 文件 URL，这里可能操作一个 dao，也可能操作好几个 dao

    -- 4.我们以 model-->dao-->router 的顺序来开发，有时候，一个 router 并不只是调用了一个 dao，或者一个 dao 也不止调用了一个 model，这时候，我们以入口，或者主要的 model 来决定放置 router 文件的位置，比如：我们要要开发查询一个作家，写了多少本书的接口，我们应该在 author 下，添加一个 list_include_books 的接口即可

    -- 5.有的 router 可能不涉及到 dao 操作，比如 sms，file，webhook，此时，我们可以按照功能的分类来组织模块

#### DAO 详解：

    -- 1. 4个基本方法，增、删、改、查：add、delete、update、list（查询10条有分页）、all（查询全部无分页）

    -- 2. 4个高阶方法，求和、计数、自增、模糊搜索：sum、count、increment、search

    -- 3. 关联查表方法，一对多：list_include（复数）；一对一：list_with（单数），此处请参考dao 代码，book/list_with_author 和 author/list_include_books

    -- 4. 其他自定义方法，按照实际需求在每一个 model 对应的 dao中自由定制

#### PostMan 接口示例详解：

    -- 1.所有的请求均使用 post 方法，因此请注意查看 body

    -- 2.请注意，delete 等接口的参数在 query 里面，也就是 get 参数里面，为什么如此呢？因为要区分实体数据和负数数据，一个走POST，一个走GET

    -- 3.导入postman 后请记得启动服务器，然后可以直接测试接口

#### 设计思路：

    -- 1.所有的数据结构都应该在 model 里面定义，这个文件夹的存在就是完全为了数据结构而生，不应该有其他任何操作

    -- 2.所有的数据操作均应该在 dao 里面，这也是为什么要把那么多重复的方法都放在一个文件里：可以在这个文件里放任何复杂的、基本方法不满足的数据方法，在外层的多个 router 均直接调用同一个方法即可，这对于保证数据一致性非常有用，言外之意：所有的数据均通过统一的数据操作方法生成，避免了在外层多次调用、书写参数时因为粗心大意而写错、写少了参数，这在开发中非常的常见，统一方法的话，就能避免这个问题。比如，金融业务，需要在多个场合查询同一个值：7天前的某一家店铺的团购所有订单的未提现订单的总金额，这里要过滤时间、店铺 ID、订单状态，父子订单关系，父订单提现状态、子订单提现状态，那么我们把他封装在 dao 里面直接外层调用即可；同时，这个业务场景在查询后，还需要 update 这个结果的所有状态，那么也应该封装在 dao 里面外层统一调用。比如另一个场景，sequelize 的方法无法完成查询，必须依赖非常复杂的原始 SQL 语句，那么也可以封装在 dao 里面

    -- 3.任何可以共用的业务逻辑，应该放在 utils/service 里面，本项目展示的主要是数据操作，但是很多项目会有各种上下游依赖等业务需求，凡是公用的业务方法，都应该被封装，然后保持router 的简洁性

    -- 4.对任何权限操作、数据处理，均应该与 router 分离，也就是：在 utils 里面提供公用的数据处理方法供 router 调用，或者在统一的中间件里面做授权处理

    -- 5.所有的延时方法均应该使用异步，异步是 node 的灵魂，必要的时候可以使用 child_prosess

    -- 6.定时任务应该统一管理，都应该放在 utils/cron 里面

    -- 7.与业务无关的公共方法，应该放在 utils/lib 里面

    -- 8.中间件应该采用标准的 KOA 格式，放在 utils/midware 里面
