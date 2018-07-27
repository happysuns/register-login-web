/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * data: 2018/7/27
 */
class Form extends React.Component {
    renderFormItem(config) {
        return config.map((values, index) => {
            const {label, type, name, placeholder, after, ...other} = values;
            return (
                <section key={index}>
                    <label>{`${label}:`}</label>
                    <input type={type}
                           name={name}
                           placeholder={placeholder}
                           required="required"
                           {...other}
                    />
                    {after}
                </section>
            )
        });
    }

    render() {
        const {config, ...props} = this.props;
        return (
            <form className="form"
                  {...props}
            >
                {this.renderFormItem(config)}
                {this.props.children}
                <button className="submitBtn">登录</button>
            </form>
        )
    }
}
