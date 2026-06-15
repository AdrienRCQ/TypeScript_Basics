var servers = [
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
function countLinuxServers(servers) {
    return servers.filter(function (s) { return s.os === "Ubuntu"; }).length;
}
function getOverloadServers(servers) {
    return servers.filter(function (s) { return s.cpu >= 80; });
}
console.log(getOverloadServers(servers));
