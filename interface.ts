
interface Mailable{
    send(email:string):boolean;
    queue(email:string):boolean;
}

interface FutureMailable extends Mailable{
    later(email:string, after:number):boolean;
}

class Mail implements FutureMailable{
    //email:string;
    // after:number;
    // constructor(email:string, after:number){
        // this.email=email;
        // this.after=after;
    later(email: string, after: number): boolean {
        console.log(`Send email to ${email} in ${after} ms.`);
        return true;
    }
    send(email: string): boolean {
        console.log(`Sent emai to ${email}`)
        return true;
    }
    queue(email: string): boolean {
        console.log(`Queue an email to ${email}`)
        return true;
    }
    queueFalse(email: string): boolean {
        console.log(`Queue an email to ${email}`)
        return false;
    }
    }

    const mail1 =new Mail();
    console.log(mail1.send(`muhamad.ilmi86@gmail.com`));
    console.log(mail1.later(`muhamad.ilmi86@gmail.com`,10));
    console.log(mail1.queueFalse(`muhamad.ilmi86@gmail.com`));
    