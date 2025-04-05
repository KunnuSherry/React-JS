import {Card, CardContent, CardActions, Typography, Button} from "@mui/material"

export function TodoItem({details, todo}){
    console.log(todo)
    return <Card sx={{maxWidth:350,
        display:"flex",
        flexDirection:"column",
        justifyContent: "space-between",
        backgroundColor:"gray",
        width:"100%",
        padding: "20px",
        boxShadow: "0px 10px 20px rgba(230, 230, 230, 0.25)"
    }}>
        <CardContent>
            <Typography variant="h3" color={"text.secondary"}>{todo?.todo}</Typography>
        </CardContent>
        <CardActions>
            <Button onClick={()=>details(todo?.id)} sx={{
                backgroundColor: 'black',
                color: 'white',
                opacity: '0.7',
                '&:hover':{
                    backgroundColor:'white',
                    color: 'black',
                    opacity: '1',
                }
            }}>Show Details</Button>
        </CardActions>
    </Card>
}