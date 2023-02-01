## Agile Server

### A simple, fast, complete Node.js server solution, based on KOA.

开发速度超级快、快、快的 node API 解决方案，基于 KOA。 

#### 一、运行启动（确保已经安装了Node JS）：

    npm install     （安装依赖包）

    npm start       （启动开发，env为dev）

    npm run pm2     （线上部署，env为online）

    npm run test    （单元测试）


#### 二、主要功能及规范：

    每个model自带数据库12基本种操作（增、删、改、查页、查全、模糊查、求和、计数、一带一、一带多、事务）；

    文件上传；

    循环定时任务、计划定时事件；

    接口权限认证；

    redis 缓存 session；

    短信验证码发放；

    webhook 自动上线；

    单元测试；

    事件订阅；


#### 三、项目背景：

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


#### 四、代码结构：精简到了极致，其他的全部干掉了

    -- config 配置文件
        -- auth 需要认证的接口列表
        -- env 环境变量，及其配置
        -- enums 全局变量统一配置
        -- sequelize 放 MySQL 相关的配置
        -- session 放 Redis 相关的session配置

    -- dao 数据操作方法，自带有基本方法，可自定义方法，完整方法请参考 book
        --__common.js 为公共dao提供统一的入口，会被所有的dao引用，在router可直接使用

    -- lib，各种库文件代码

    -- models 数据模型，将自动会同步到数据库

    -- router 路由地址，所有的 api 操作
        --__view 专门为view提供的router文件夹，若没有view此文件夹为空

    -- service，若有，抽象出来的公共业务代码，注意：lib 提供业务无关方法，而 service 则针对具体业务

    -- test  单元测试文件夹， 所有的测试用例
        -- manual手动测试代码的专用文件夹，不会跑单元测试

    -- utils 插件和库
        -- event，事件处理器所在文件夹，任何地方通知了，都在此处处理
        -- midware，自定义的 KOA 中间件，请注意开发格式
        -- schedule，循环任务和计划任务处理文件夹

    -- views 如果是后端 MVC 架构代码渲染模板，view应该放在此处

#### 五、技术框架：

    后端框架：KOA

    数据模型：Sequelize

#### 六、开发步骤：

    -- 1.定义 model，修改数据库字段定义，直接从以前的 model 文件复制修改即可

    -- 2.定义 dao，直接复制一个基本的 dao 就好，比如 book，甚至代码都不用动

    -- 3.定义 router 也就是 api 文件 URL，这里可能操作一个 dao，也可能操作好几个 dao

    -- 4.我们以 model-->dao-->router 的顺序来开发，有时候，一个 router 并不只是调用了一个 dao，或者一个 dao 也不止调用了一个 model，这时候，我们以入口，或者主要的 model 来决定放置 router 文件的位置

    -- 5.有的 router 可能不涉及到 dao 操作，比如 sms，file，webhook，此时，我们可以按照功能的分类来组织模块

#### 七、DAO 详解：

    -- 1. 5个基本方法，增、删、改、查：add、delete、update、list（查页）、all（查全）

    -- 2. 4个高阶方法，求和、计数、自增、模糊搜索：sum、count、increment、search

    -- 3. 2个关联查表方法，一对多：list_include（复数）；一对一：list_with（单数），此处请参考dao 代码，book/list_with_author 和 author/list_include_books

    -- 4. 其他自定义方法，按照实际需求在每一个 model 对应的 dao中自由定制

#### 八、PostMan 接口示例详解：

    -- 1.所有的请求均使用 post 方法，且一般情况使用x-www-form-urlencoded

    -- 2.请注意，delete 等接口的参数在 query 里面，也就是 get 参数里面，为什么如此呢？因为要区分实体数据和附属数据，一个走POST，一个走GET

    -- 3.导入postman 后请记得启动服务器，然后可以直接测试接口

#### 九、设计思路：

    -- 1.所有的数据结构都应该在 model 里面定义，这个文件夹的存在就是完全为了数据结构而生，不应该有其他任何操作，这在多种框架内都有提供，不赘述

    -- 2.所有的数据操作均应该在 dao 里面：可以在这个文件里放任何复杂的、基本方法不满足的数据操作方法，在外层的 router 直接调用同一个方法即可，这对于保证数据一致性非常有用。另一个场景，sequelize 的方法无法完成查询，必须依赖非常复杂的原始 SQL 语句，那么也可以封装在 dao 里面

    -- 3.任何可以共用的业务逻辑，应该放在 service 里面，本项目展示的主要是数据操作，但是很多项目会有各种上下游依赖等业务需求，凡是公用的业务方法，都应该被封装，然后保持 router 的简洁性

    -- 4.对任何权限操作、数据处理，均应该与 router 分离，也就是：在 utils 里面提供公用的数据、权限处理方法供 router 调用，或者在统一的中间件里面做授权处理，减少router的代码量

    -- 5.所有的延时方法均应该使用异步，异步是 node 的灵魂，必要的时候可以使用 child_prosess

    -- 6.定时、任务应该统一管理，都应该放在 utils/crontab 里面

    -- 7.与业务无关的公共方法，应该放在 lib 里面

    -- 8.中间件应该采用标准的 KOA 格式，放在 utils/midware 里面

#### 十、主要优点：
    --1.核心代码复制粘贴化；
    --2.参数操作、数据库操作 Json 化：
    这是对比PHP和Java的重要优势，因为 Json（JavaScript Object Notation） 是JS原生支持的，并且JS支持对象展开操作，...运算符，可以将参数简化，直接省去了一次次的无聊的参数接受、返回的重写；
    --3.联表查询傻瓜化；
    --4.常见业务标准化；

#### 十一、主要问题：
    --1.常规业务有覆盖，但是可能缺失特定功能，比如对PDF的操作，后续要加上；
    --2.作为自用快速Starter，大家如果使用过程中遇到了问题，欢迎拍砖和交流；
    

#### 十二、扩展优化

    --1.所有的session应该保存在Redis，服务器上除了代码，不应该放任何文件：上传文件、文件session、日志等，应该放在OSS，这样才能够便于扩展集群能力，使用nginx的负载均衡。

    --2.socket.io扩容的时候，请注意，因为socket虽然不产生文件，没有文件同步问题，但是，他必须绑定IP，因此有IP问题，请参考： https://www.cnblogs.com/zzsdream/p/8403786.html
