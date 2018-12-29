export class Conversation {
  constructor(
    public time: string,
    public msg: string,
    public sender: string //self or other
  ) {}
}
