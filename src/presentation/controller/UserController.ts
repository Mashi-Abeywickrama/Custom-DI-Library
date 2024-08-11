import { Request, Response } from "express";
import { UserService } from "../../application/UserService";
import { inject } from "../../di/InjectDecorator";

export class UserController {

  @inject('UserService')
    public userService: UserService;


  async getUserById(req: Request, res: Response): Promise<Response> {
    const id = Number(req.params.id);

    try {
      const user = await this.userService.getUserById(id);

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      return res.json(user);
    } catch (error) {
      console.error("Error while fetching user:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
}