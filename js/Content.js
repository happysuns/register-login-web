/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * data: 2018/7/27
 */
class Content extends React.Component {
    render() {
        // 登陆config
        const loginConfig = [{
            label: '用户名',
            type: 'text',
            name: 'name',
            placeholder: '邮箱/手机号'
        }, {
            label: '密码',
            type: 'password',
            name: 'password'
        }];
        // 注册 重置密码config
        const registerConfig = [{
            label: '用户名',
            type: 'text',
            name: 'name',
            placeholder: '邮箱/手机号'
        }, {
            label: '密码',
            type: 'password',
            name: 'password'
        }, {
            label: '验证码',
            type: 'verification',
            name: 'verification',
            after: (
                <button className="verificationButton">发送验证码</button>
            )
        }];
        return (
            <React.Fragment>
                <FormContainer id="login"
                               classname="login"
                               config={loginConfig}
                />
                <FormContainer id="register"
                               classname="login register"
                               config={registerConfig}
                               title="注册账号-"
                               buttonLabel="立即注册"
                />
                <FormContainer id="resetPassword"
                               classname="login register"
                               config={registerConfig}
                               title="重置密码-"
                               buttonLabel="重置"
                />
            </React.Fragment>

        )
    }
};
