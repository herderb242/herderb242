document.addEventListener('DOMContentLoaded', () => {
    initTypingEffect();
    initLiveLogStream();
    initInteractiveCLI();
});

function initTypingEffect() {
    const target = document.getElementById('typing-text');
    const phrases = [
        "SOC Analyst & Log Telemetry Specialist",
        "Wazuh SIEM Lab Engineer",
        "Threat Detection & Incident Response",
        "Windows Event & Syslog Specialist"
    ];
    let phraseIdx = 0, charIdx = 0, isDeleting = false;

    function type() {
        const current = phrases[phraseIdx];
        target.textContent = isDeleting ? current.substring(0, charIdx - 1) : current.substring(0, charIdx + 1);
        charIdx += isDeleting ? -1 : 1;
        let speed = isDeleting ? 40 : 80;

        if (!isDeleting && charIdx === current.length) { speed = 2000; isDeleting = true; }
        else if (isDeleting && charIdx === 0) { isDeleting = false; phraseIdx = (phraseIdx + 1) % phrases.length; speed = 500; }

        setTimeout(type, speed);
    }
    type();
}

function initLiveLogStream() {
    const streamContainer = document.getElementById('log-stream');
    const logs = [
        { type: 'info', text: '[INFO] Wazuh-Agent (ID: 002) connected on 192.168.1.105' },
        { type: 'warn', text: '[WARN] Multiple failed SSH attempts detected from 10.0.0.42' },
        { type: 'info', text: '[INFO] Windows Event ID 4624 (Successful Logon) recorded' },
        { type: 'alert', text: '[ALERT] Rule ID: 100201 - Suspicious PowerShell Command Executed' },
        { type: 'info', text: '[INFO] Sysmon Event ID 1: Process creation monitored' },
        { type: 'warn', text: '[WARN] Unrecognized outbound connection on port 4444' }
    ];
    let logIdx = 0;

    function addLog() {
        if (!streamContainer) return;
        const item = logs[logIdx % logs.length];
        const p = document.createElement('p');
        p.className = 'log-line';
        p.innerHTML = `<span class="time">[${new Date().toLocaleTimeString()}]</span> <span class="${item.type}">${item.text}</span>`;
        streamContainer.appendChild(p);
        if (streamContainer.childNodes.length > 4) streamContainer.removeChild(streamContainer.firstChild);
        logIdx++;
        setTimeout(addLog, Math.floor(Math.random() * 2500) + 1500);
    }
    addLog();
}

function initInteractiveCLI() {
    const input = document.getElementById('cli-input');
    const output = document.getElementById('cli-output');
    if (!input || !output) return;

    const commands = {
        'help': `Available Commands:
  - <span class="cmd-highlight">about</span>    : Display personnel dossier
  - <span class="cmd-highlight">skills</span>   : List security arsenal & technical skills
  - <span class="cmd-highlight">projects</span> : Show active security labs
  - <span class="cmd-highlight">wazuh</span>    : Display Wazuh SIEM lab breakdown
  - <span class="cmd-highlight">contact</span>  : Show direct contact parameters
  - <span class="cmd-highlight">whoami</span>   : Print current visitor identity
  - <span class="cmd-highlight">clear</span>    : Clear terminal screen`,
        'about': `[DOSSIER]: Cybersecurity student & SOC Analyst.
Specializing in SIEM deployment, log telemetry, threat hunting, and incident triage.`,
        'skills': `[ARSENAL]:
- SIEM: Wazuh Server/Agent, Splunk, Elastic
- Traffic: Wireshark, Nmap, TCP/IP
- OS: Ubuntu Linux, Kali, Windows Server / Win 11
- Scripting: Python 3, Bash, PowerShell, Regex`,
        'projects': `[LABS]:
1. Enterprise Wazuh SIEM & Windows Endpoint Telemetry (2-VM subnet architecture)
2. Automated Threat Intel & Syslog IOC Extractor (Python)`,
        'wazuh': `[WAZUH LAB ARCHITECTURE]:
- Architecture: 2 Virtual Machines on same subnet (192.168.1.0/24)
- Server: Ubuntu 22.04 LTS running Wazuh Indexer & Dashboard
- Endpoint: Windows 11 running Wazuh Agent + Sysmon`,
        'contact': `[CONTACT TRANSMISSION]:
- Email: your.email@example.com
- LinkedIn: linkedin.com/in/yourprofile
- GitHub: github.com/yourusername`,
        'whoami': `Guest Analyst @ Local Interface`
    };

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const cmd = input.value.trim().toLowerCase();
            input.value = '';
            const cmdLine = document.createElement('div');
            cmdLine.innerHTML = `<span class="cli-prompt">visitor@cyber-ops:~$</span> ${cmd}`;
            output.appendChild(cmdLine);

            if (cmd === 'clear') {
                output.innerHTML = '';
            } else if (commands[cmd]) {
                const response = document.createElement('div');
                response.style.color = '#c0caf5';
                response.style.margin = '4px 0 12px 0';
                response.innerHTML = commands[cmd];
                output.appendChild(response);
            } else if (cmd !== '') {
                const err = document.createElement('div');
                err.style.color = '#ff0055';
                err.style.margin = '4px 0 12px 0';
                err.textContent = `Command not recognized: '${cmd}'. Type 'help' for available commands.`;
                output.appendChild(err);
            }
            output.scrollTop = output.scrollHeight;
        }
    });
}

function runCliCommand(cmdName) {
    const input = document.getElementById('cli-input');
    if (input) {
        input.value = cmdName;
        input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
        document.getElementById('terminal').scrollIntoView({ behavior: 'smooth' });
    }
}

function copyEmail() {
    const emailText = document.getElementById('email-text').innerText;
    navigator.clipboard.writeText(emailText).then(() => {
        const btn = document.getElementById('copy-email-btn');
        btn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
        setTimeout(() => { btn.innerHTML = '<i class="fa-solid fa-copy"></i> Copy'; }, 2000);
    });
}
