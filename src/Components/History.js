/* eslint-disable */
import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';

class History extends Component{
    render(){
        if(this.props.data)
        {
            var information = this.props.data.information.map(function(information){
                let iconData;
                if(information.icon == 1)
                    iconData = <SchoolIcon />
                
                if(information.icon == 2)
                    iconData =  <WorkIcon />
                    

                // console.log(information.icon);
                return <VerticalTimelineElement
                        key={information.title}
                        className={information.type}
                        contentStyle={{ background: 'whitesmoke', color: '#000', font: '22px/30px opensans-bold, sans-serif'}}
                        date={information.date}
                        iconStyle={{ background: '#2B2B2B', color: 'rgb(236, 150, 0)' }}
                        icon = {iconData}
                        >
                        <h3 className="vertical-timeline-element-title">{information.title}</h3>
                        <h4 className="vertical-timeline-element-subtitle">{information.subtitle}</h4>
                        <p>
                            {information.description}
                        </p>
                        </VerticalTimelineElement>
  
              })

        }
        return(
            <section id="history">
                <h2>Academics and Work</h2>
                <VerticalTimeline>
                    <div>
                        {information}
                    </div>
                </VerticalTimeline>
                
            </section>    
        )
    }      
}
export default History;