class AuthServices {
  async login(email: string, password: string): Promise<string> {
    return "token";
    }
}

export default AuthServices;