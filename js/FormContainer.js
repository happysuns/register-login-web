/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * data: 2018/7/27
 */
class FormContainer extends React.Component {
    animationTranslate(target, numberX) {
        anime({
            targets: target,
            translateX: numberX
        });
    }

    /**
     * 封装跳转
     */
    combinationJump(start) {
        this.animationTranslate('#login', -550);
        this.animationTranslate(start, 550);
    }


    /**
     * 返回登陆
     */
    backLogin(formId) {
        this.animationTranslate('#login', 0);
        this.animationTranslate(`#${formId}`, 0);
    }

    /**
     * 跳转注册
     */
    goToRegister() {
        this.combinationJump('#register');
    }

    /**
     * 跳转重置密码
     */
    goToResetPassword() {
        this.combinationJump('#resetPassword');
    }

    render() {
        const {id, classname, config, title = '', ...other} = this.props;
        return (
            <aside className={classname}
                   id={id}
            >
                <h1 className="logo">{`${title}上福数据`}</h1>
                <p className="descr">上福数据 是金融圈最具影响力的 技术服务供应商</p>
                <Form config={config}
                      {...other}
                >
                    {
                        id === 'login' && (
                            <p className="service">
                                <a href="javascript:void(0);"
                                   onClick={this.goToRegister.bind(this)}
                                >注册账户</a>
                                <a href="javascript:void(0);"
                                   onClick={this.goToResetPassword.bind(this)}
                                >忘记密码</a>
                            </p>
                        ) || (
                            <section className="backButton"
                                     onClick={() => this.backLogin(id)}
                            >
                                <span className="backImg"/>
                                <span className="backTitle">返回登录</span>
                            </section>
                        )
                    }
                </Form>
            </aside>
        );
    }
}
