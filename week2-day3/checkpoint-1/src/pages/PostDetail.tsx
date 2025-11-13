import { useParams } from "react-router-dom";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
const PostDetail = () => {
    const { postId } = useParams()
    console.log(postId)
    return (
        <div className="w-4/5 flex flex-col">
            <h1>Detail Project</h1>
            <Card className="min-w-2xs">
                <CardHeader>
                    <CardTitle>Post ke - {postId}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Card Content</p>
                </CardContent>
                <CardFooter>
                    <p>Card Footer</p>
                </CardFooter>
            </Card>
        </div>
    );
}

export default PostDetail;