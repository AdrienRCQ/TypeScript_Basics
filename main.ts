interface Server {
    hostname: string;
    ip: string;
    os: string;
    cpu: number;
}

const servers: Server[] = [
    {
    hostname: "srv_web",
    ip: "192.168.1.2",
    os: "Ubuntu",
    cpu: 60
    },
    {
        hostname: "srv_bdd",
        ip: "192.168.1.3",
        os: "Rocky",
        cpu: 90
    }
 ];

 function countLinuxServers(servers:Server[]): number {
    return servers.filter(s => s.os === "Ubuntu").length;
 }

 function getOverloadServers (servers:Server[]) {
    return servers.filter(s => s.cpu >= 80)
 }


 console.log(getOverloadServers(servers))