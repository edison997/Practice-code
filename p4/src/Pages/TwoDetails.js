import React,{Component} from 'react' 
import "../css/TwoDetails.css"
import {LeftOutlined,HeartOutlined} from '@ant-design/icons'
import {Tooltip} from "antd"

class TwoDetails extends Component {
    

    render(){
       console.log(this.props.match.params);
        return(
            <div className="TwoDetails">
            <div>
                <div className="renturnDiv"> <LeftOutlined /> 返回沙发</div>

                <div className="TwoDetailsBox">

                    <div className="TwoDetailsBoxLunbo">
                        <img src={require("../assets/details/1.jpg").default} alt="" />
                    </div>

                    <div className="detailsText">

                        <p className="Pdetail">CARLTON 沙发</p>
                        <div>Carlton</div>
                        <Tooltip placement="topLeft" title="添加到收藏">
                            <p className="detailsSvg"><HeartOutlined /></p>
                        </Tooltip>

                        <div className="detailsIntroduction">
                            精致的 Carlton 沙发灵感来自 60 和 70 年代的家具设计，您赋予您的起居室微妙的复古味道，引人注目。 这款宽敞的三人位沙发助您随心打造舒适的合家或独居氛围。
                        </div>
                    </div>

                </div>

            </div>

                

            </div>
            
        )  
    }
}

export default TwoDetails