import React from 'react'
import './InfoBox.css'
import {Card,CardContent,Typography} from "@material-ui/core";

function InfoBox() {
    return (
        <Card>
            
            <CardContent>
                <Typography className="infoBox__title" color="textSecondary" >
                    Hello
                </Typography>

                <h2 className="infoBox__cases">5</h2>

                <Typography className="infoBox__total" color="textSecondary">
                     Total
                </Typography>

            </CardContent>
            
        </Card>
    )
}

export default InfoBox