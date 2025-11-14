import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/hooks/userAuth";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const {login} = useAuth()
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [errorMsg, setErrorMsg] = useState<string>("")

    const navigate = useNavigate()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        console.log("cek")
        
        if (username === "iki" && password === "password") {
            login("token-iki")
            setErrorMsg("")
            navigate("/home")
        } else {
            setErrorMsg("Username atau Password salah!!!")
        }
    }
    return (
        <Card className="w-full max-w-sm">
            <CardHeader>
                <CardTitle>Login</CardTitle>
                {
                    errorMsg && (
                        <p className="p-2 bg-red-400 rounded">{errorMsg}</p>
                    )
                }
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                            <div className="flex flex-col items-start">
                                <Label htmlFor="username">Username</Label>
                                <Input
                                    id="username"
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    placeholder="Masukan Username"
                                    required
                                />
                            </div>
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="password">Password</Label>
                                <a
                                    href="#"
                                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                >
                                    Forgot your password?
                                </a>
                            </div>
                            <Input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required />
                        </div>
                        <Button type="submit" className="w-full cursor-pointer">
                            Login
                        </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}

export default Login;