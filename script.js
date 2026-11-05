'use strict';

const VIEWS = [
  { id: 'learn', label: 'Learn', icon: 'alert' },
  { id: 'investigate', label: 'Investigate', icon: 'search' },
  { id: 'mitigation', label: 'Defend', icon: 'shield' }
];

const STATUS_LABELS = {
  notStarted: 'Active attack',
  investigated: 'Investigated',
  defended: 'Neutralized'
};

const THREATS = [
  {
    id: 'phishing',
    name: 'Phishing Email',
    investigateTitle: 'Employee Email',
    icon: 'mail',
    image: 'learn-phishing.jpg',
    imageAlt: 'A fishing hook pulls a card out of an email on a laptop while a surprised worker watches.',
    learn: [
      'Phishing is a cyberattack where criminals pretend to be a trusted group. They trick people into giving up passwords, money or private information.',
      'Phishing messages usually push you to act fast. They use urgent warnings and links to fake login pages.',
      'One click can lead to stolen identities, lost money and data breaches, when private data gets out, that hurt both people and companies.'
    ],
    defense: {
      title: 'Defend against phishing attacks',
      question: 'Which security measure is the best defense against phishing?',
      options: [
        {
          label: 'Two-Factor Authentication',
          correct: false,
          sections: [
            { heading: 'What it does', text: 'Asks for a second check, like a code sent to your phone, when you log in.' },
            { heading: 'Why it’s not the best choice', text: 'It protects an account after a password is stolen, but it doesn’t stop someone from being tricked by the email.' }
          ]
        },
        {
          label: 'Phishing Training',
          correct: true,
          sections: [
            {
              heading: 'Why?',
              list: [
                'Training teaches employees to spot warning signs like fake senders, urgent language and suspicious links.',
                'Trained employees report phishing emails, which stops attacks before they spread.',
                'Phishing tricks people, not computers, so people are the best defense.'
              ]
            }
          ]
        },
        {
          label: 'Firewall',
          correct: false,
          sections: [
            { heading: 'What it does', text: 'Blocks unwanted connections between a network and the internet.' },
            { heading: 'Why it’s not the best choice', text: 'A firewall can’t stop an employee from trusting a convincing email and clicking its link.' }
          ]
        }
      ]
    }
  },
  {
    id: 'passwords',
    name: 'Weak Passwords',
    investigateTitle: 'Password Problems',
    icon: 'password',
    image: 'learn-passwords.jpg',
    imageAlt: 'A hooded attacker on a ladder reaches for an open padlock on a laptop login screen next to a broken shield.',
    learn: [
      'Weak passwords are short, easy to guess or reused on many accounts. They make it easy for attackers to break in and steal data.',
      'Attackers use automated tools that can try thousands of guesses per second. Once inside, they can steal data or use the account to attack other systems.',
      'One weak password can lead to a data breach that puts employees and customers at risk.'
    ],
    defense: {
      title: 'Defend against password attacks',
      question: 'Which security measure is the best defense against weak passwords?',
      options: [
        {
          label: 'Regular Software Updates',
          correct: false,
          sections: [
            { heading: 'What it does', text: 'Fixes known security holes in software.' },
            { heading: 'Why it’s not the best choice', text: 'Attackers can still guess simple passwords, even on fully updated systems.' }
          ]
        },
        {
          label: 'Strong Password Policy',
          correct: true,
          sections: [
            {
              heading: 'Why?',
              list: [
                'It requires long, unique passwords that are hard to guess.',
                'It blocks dictionary and brute force attacks, which depend on short or common passwords.',
                'It stops employees from reusing one weak password across many accounts.'
              ]
            }
          ]
        },
        {
          label: 'Password Management Tools',
          correct: false,
          sections: [
            { heading: 'What it does', text: 'Creates, stores and fills in complex passwords for you.' },
            { heading: 'Why it’s not the best choice', text: 'It only helps if people use it. Without a policy, employees can still pick weak passwords.' }
          ]
        }
      ]
    }
  },
  {
    id: 'credentials',
    name: 'Default Credentials',
    investigateTitle: 'Default Credentials',
    icon: 'key',
    image: 'learn-credentials.jpg',
    imageAlt: 'An attacker reaches through an office window toward an unlocked router connected to a camera, a thermostat and a laptop.',
    learn: [
      'Default credentials are the usernames and passwords that come preset on devices like routers and cameras. Many people leave them as they came.',
      'Attackers find these defaults online. They can log in to Internet of Things (IoT) devices, everyday devices connected to the internet, without any hacking.',
      'Once inside, attackers can spy through cameras, take control of systems or move deeper into the network.'
    ],
    defense: {
      title: 'Defend against default credentials',
      question: 'Which security measure is the best defense against default credentials?',
      options: [
        {
          label: 'Encrypted Data',
          correct: false,
          sections: [
            { heading: 'What it does', text: 'Scrambles data so only someone with the right key can read it.' },
            { heading: 'Why it’s not the best choice', text: 'Encryption protects data, but anyone who logs in with the default password still gets full access to the device.' }
          ]
        },
        {
          label: 'Regular Software Updates',
          correct: false,
          sections: [
            { heading: 'What it does', text: 'Fixes known security holes in software and in the code inside devices.' },
            { heading: 'Why it’s not the best choice', text: 'Updates don’t change the login, so a device with a default password is still open.' }
          ]
        },
        {
          label: 'Change Default Credentials',
          correct: true,
          sections: [
            {
              heading: 'Why?',
              list: [
                'Default usernames and passwords are public, so anyone can look them up.',
                'A unique, strong password on every device blocks these easy logins.',
                'Many large attacks start by scanning the internet for devices that still use factory passwords.'
              ]
            }
          ]
        }
      ]
    }
  },
  {
    id: 'social',
    name: 'Social Engineering',
    investigateTitle: 'Social Engineering',
    icon: 'spy',
    image: 'learn-social.jpg',
    imageAlt: 'A large gloved hand controls an office worker with puppet strings while a smiling speech bubble hides a fishing hook.',
    learn: [
      'Social engineering attacks trick people instead of computers. Attackers use trust, fear, urgency or curiosity to get someone to share a password or let them in.',
      'Common tactics include phishing emails and fake IT support calls (pretexting). Others are following someone through a locked door (tailgating) and leaving infected USB drives for people to find (baiting).',
      'Because these attacks target human behavior, they can get past technical defenses, like software that blocks outside access.'
    ],
    defense: {
      title: 'Defend against social engineering',
      question: 'Which security measure is the best defense against social engineering?',
      options: [
        {
          label: 'Security Awareness Training',
          correct: true,
          sections: [
            {
              heading: 'Why?',
              list: [
                'Social engineering targets people, not technology.',
                'Training helps employees recognize phishing, pretexting, baiting and tailgating.',
                'Trained employees check who is asking and report suspicious requests.'
              ]
            }
          ]
        },
        {
          label: 'Strong Password Policy',
          correct: false,
          sections: [
            { heading: 'What it does', text: 'Requires long, complex, unique passwords.' },
            { heading: 'Why it’s not the best choice', text: 'A strong password doesn’t help if an attacker tricks someone into sharing it.' }
          ]
        },
        {
          label: 'Firewall',
          correct: false,
          sections: [
            { heading: 'What it does', text: 'Blocks unwanted connections between a network and the internet.' },
            { heading: 'Why it’s not the best choice', text: 'A firewall can’t stop an employee from handing information to someone they trust.' }
          ]
        }
      ]
    }
  }
];

// Each paragraph of the email is a list of whole sentences; a sentence with a clue id is a red flag.
const EMAIL_PARAGRAPHS = [
  [{ text: 'From: IT Support Team (it-support@cybershield-security.com)', clue: 'sender' }],
  [{ text: 'To: jones@cybershield.com' }],
  [{ text: 'Hello,', clue: 'greeting' }],
  [
    { text: 'We recently detected suspicious login attempts on your account.' },
    { text: 'To ensure your security, you are required to update your password immediately.', clue: 'urgency', strong: true }
  ],
  [{ text: 'Failure to update your password within the next 24 hours will result in temporary suspension of your account access.', clue: 'urgency', strong: true }],
  [
    { text: 'To update your password, please click on the secure link below:', clue: 'link' },
    { text: 'Update Password Now', clue: 'link', link: true, block: true }
  ],
  [{ text: 'If you have any questions, please contact IT support at it-support-helpdesk@cybershield.com.', clue: 'replyto' }],
  [{ text: 'Stay secure, IT Support Team, Cybershield Inc.' }]
];

const CLUES = {
  sender: {
    heading: 'The sender’s email address is suspicious.',
    list: [
      'The part after the @, “cybershield-security.com,” looks close to the real one, “cybershield.com,” but it isn’t the same.',
      'Attackers register look-alike addresses to pretend to be real companies.'
    ]
  },
  greeting: {
    heading: 'The greeting is generic.',
    list: [
      'A plain “Hello,” with no name suggests the same email went to many people.',
      'A real IT team would likely use your name for a security issue about your account.'
    ]
  },
  urgency: {
    heading: 'The urgency is a red flag.',
    list: [
      'Phishing emails pressure you to act before you think.',
      'Real IT teams don’t threaten to lock your account. Check by contacting IT in a way you already trust, like calling the help desk.'
    ]
  },
  link: {
    heading: 'The link is suspicious.',
    list: [
      'The link says “secure,” but you can’t see where it really goes.',
      'Fake links often lead to look-alike login pages that steal your password.'
    ]
  },
  replyto: {
    heading: 'The contact email is suspicious.',
    list: [
      'It doesn’t match the sender’s address.',
      'Attackers add fake support contacts to seem trustworthy. Find contact info on the company’s official website instead.'
    ]
  }
};

const CLUE_COUNT = Object.keys(CLUES).length;

const PASSWORD_METHODS = [
  {
    id: 'dictionary',
    name: 'Dictionary Attack',
    summary: 'Uses common words and phrases.',
    how: 'Attackers try lists of common words and passwords. Passwords like “password123” or “qwerty” are guessed in seconds.',
    consequence: 'Simple, common passwords put accounts and data at risk.',
    defense: [
      'Require strong, unique passwords that avoid common words.',
      'Use password management tools to generate and store secure passwords.'
    ]
  },
  {
    id: 'brute',
    name: 'Brute Force Attack',
    summary: 'Tries every possible combination.',
    how: 'Attackers try every possible combination until one works. Passwords of 8 characters or fewer can be cracked in minutes.',
    consequence: 'The shorter the password, the easier it is to break.',
    defense: [
      'Require long passwords (12 or more characters).',
      'Turn on two-factor authentication (a second check, like a phone code) so a cracked password isn’t enough.'
    ]
  },
  {
    id: 'personal',
    name: 'Personal Information Attack',
    summary: 'Guesses based on names, birthdays, or company details.',
    how: 'Attackers guess passwords from personal details like names, birthdays or the company name. “Sarah1995” and “Cybershield2024” are easy guesses.',
    consequence: 'Information posted online can be used to guess passwords.',
    defense: [
      'Avoid using personal details in passwords.',
      'Use randomly generated passwords that are not tied to the user.'
    ]
  }
];

const DEVICES = [
  {
    id: 'router',
    name: 'Router',
    icon: 'router',
    loginTitle: 'Router Login',
    username: 'admin',
    password: 'admin',
    secure: false,
    risk: null,
    verdictTitle: 'Default Credentials Still in Use',
    verdict: 'This is a common factory default that attackers can easily find online and use to access the router.',
    outcomeTitle: 'Router (Hijacked)',
    outcome: [
      'An attacker gained control of the router using default credentials.',
      'They redirected company internet traffic, exposing sensitive data.'
    ]
  },
  {
    id: 'camera',
    name: 'Security Camera',
    icon: 'camera',
    loginTitle: 'Camera Login',
    username: 'SurveillanceAdmin',
    password: 'W4%pXv!92Nq#Lm',
    secure: true,
    risk: 'Hacked security cameras let attackers spy on employees and private areas.',
    verdictTitle: 'Credentials Changed',
    verdict: 'This follows best practice: a unique username and a long, complex password.',
    outcomeTitle: 'Security Camera (Secure)',
    outcome: [
      'No security breach detected.',
      'Strong credentials prevented unauthorized access.'
    ]
  },
  {
    id: 'thermostat',
    name: 'Smart Thermostat',
    icon: 'thermostat',
    loginTitle: 'Smart Thermostat Login',
    username: 'guest',
    password: '0000',
    secure: false,
    risk: 'Hacked thermostats let attackers change building temperatures and reach other connected systems.',
    verdictTitle: 'Default Credentials Still in Use',
    verdict: 'This is a common factory default that attackers can easily find online and use to access the thermostat.',
    outcomeTitle: 'Smart Thermostat (Compromised)',
    outcome: [
      'Default credentials allowed an attacker to remotely control the thermostat.',
      'This could disrupt the office and give the attacker a way into other connected systems.'
    ]
  }
];

const ATTACK_TYPES = [
  { id: 'phishing', label: 'Phishing', icon: 'mail' },
  { id: 'pretexting', label: 'Pretexting', icon: 'phone' },
  { id: 'tailgating', label: 'Tailgating', icon: 'door' },
  { id: 'baiting', label: 'Baiting', icon: 'usb' }
];

const TARGETS = {
  ceo: 'Company CEO',
  employee: 'Company Employee',
  it: 'IT Department',
  guard: 'Security Guard'
};

const STRATEGIES = {
  authority: {
    label: 'Authority',
    text: 'Attackers pretend to be someone in charge, like IT staff or a maintenance worker, so victims follow orders without asking questions.'
  },
  fear: {
    label: 'Fear',
    text: 'Attackers create a sense of danger, like a fake security alert, so victims act before they think.'
  },
  urgency: {
    label: 'Urgency',
    text: 'Attackers set a tight deadline, like “restore access now,” so victims act before they think.'
  },
  curiosity: {
    label: 'Curiosity',
    text: 'Attackers offer something interesting, like a mystery USB drive or email, so victims engage without thinking about the risk.'
  }
};

const TRAINING_LABELS = {
  strong: 'Strong Security Awareness Training',
  weak: 'Weak Security Awareness Training'
};

const PHYSICAL_LABELS = {
  strong: 'Strong Physical Security Policies',
  weak: 'Weak Physical Security Awareness'
};

const SCENARIOS = [
  {
    attack: 'phishing', target: 'ceo', strategy: 'urgency',
    text: 'A phishing email told the CEO their account had been hacked. It pushed them to click a link right away to “restore access.”',
    strong: ['The CEO spotted the red flags.', 'They didn’t click the link and reported the email to IT.', 'The attack failed.'],
    weak: ['The CEO panicked and clicked the link.', 'Attackers stole their login and got into company systems.', 'IT had to respond to a data breach.']
  },
  {
    attack: 'phishing', target: 'employee', strategy: 'urgency',
    text: 'A phishing email told an employee their account had been hacked. It pushed them to click a link right away to “restore access.”',
    strong: ['The employee spotted the red flags.', 'They didn’t click the link and reported the email to IT.', 'The attack failed.'],
    weak: ['The employee panicked and clicked the link.', 'Attackers stole their login and got into company systems.', 'IT had to respond to a data breach.']
  },
  {
    attack: 'tailgating', target: 'ceo', strategy: 'authority', physical: true,
    text: 'An attacker dressed as a maintenance worker approached the CEO outside the building. Acting like they were in charge, they asked to be let in to fix an urgent problem.',
    strong: ['The CEO followed security rules.', 'They sent the worker to check in at reception.', 'The attacker never got inside.'],
    weak: ['The CEO held the door without checking the worker’s ID.', 'The attacker got inside the building.', 'They could now reach offices and server rooms.']
  },
  {
    attack: 'tailgating', target: 'employee', strategy: 'authority', physical: true,
    text: 'An attacker dressed as a maintenance worker approached an employee outside the building. Acting like they were in charge, they asked to be let in to fix an urgent problem.',
    strong: ['The employee followed security rules.', 'They sent the worker to check in at reception.', 'The attacker never got inside.'],
    weak: ['The employee held the door without checking the worker’s ID.', 'The attacker got inside the building.', 'They could now reach offices and server rooms.']
  },
  {
    attack: 'pretexting', target: 'it', strategy: 'authority',
    text: 'A caller pretending to be an IT administrator called the IT department about a “critical system issue.” Acting like they were in charge, they told an employee to reset a high-level account password.',
    strong: ['The IT employee spotted the red flags.', 'They wouldn’t reset the password without checking who was calling, and they reported the call.', 'The attacker got nothing.'],
    weak: ['The IT employee believed the caller and reset the password.', 'That gave the attacker access to the account.', 'The attacker broke into company systems and caused a data breach.']
  },
  {
    attack: 'pretexting', target: 'it', strategy: 'fear',
    text: 'A caller pretending to be an IT administrator warned that a breach would shut down critical systems. To scare the IT employee, they demanded a password reset right away.',
    strong: ['The IT employee stayed calm and spotted the red flags.', 'They wouldn’t reset the password without checking who was calling.', 'They reported the call, and company systems stayed safe.'],
    weak: ['The IT employee panicked and believed the threat.', 'They reset the password without checking, giving the attacker access.', 'The attacker broke into company systems.']
  },
  {
    attack: 'baiting', target: 'guard', strategy: 'fear',
    text: 'An attacker left a USB drive labeled “Confidential Security Footage” near the guard’s station. They hoped fear would make the guard plug it in to check for a threat. The drive would secretly install malware (harmful software).',
    strong: ['The guard spotted the red flags.', 'They gave the USB drive to IT security without plugging it in.', 'No malware got onto company systems.'],
    weak: ['The guard panicked and plugged the drive into a company computer.', 'Malware infected the system.', 'The attacker got into the company network.']
  },
  {
    attack: 'baiting', target: 'guard', strategy: 'curiosity',
    text: 'An attacker left a USB drive labeled “Employee Bonuses 2024” near the guard’s station. They hoped curiosity would make the guard plug it in. The drive would secretly install malware (harmful software).',
    strong: ['The guard suspected the drive was a trap.', 'They gave it to IT security without plugging it in.', 'No malware got onto company systems.'],
    weak: ['The guard got curious and plugged in the drive.', 'Malware gave the attacker remote access to the network.', 'Sensitive data was exposed.']
  }
];

const SEVERITY = {
  phishing: { id: 'critical', label: 'Critical' },
  passwords: { id: 'high', label: 'High' },
  credentials: { id: 'high', label: 'High' },
  social: { id: 'critical', label: 'Critical' }
};

// Guesses shown while a cracking method runs; the last one is the password that gets cracked.
const CRACK_RUNS = {
  dictionary: {
    guesses: ['password', '123456', 'qwerty', 'letmein', 'welcome', 'password1', 'password12', 'password123'],
    time: 'Instantly',
    speed: 140
  },
  brute: {
    guesses: ['aaaaaaaa', 'aaaaaaab', 'aaaaaaac', 'b9Qz0aaa', 'f3Lm8xpa', 'h7Tq2wve', 'k1Rb5sdn', 'm4Xp0Lq2', 'p8Vn2Wc5', 'r2Jd7Yk1', 's6Fh3Ue9', 'k7Rq2x9a'],
    time: 'Minutes',
    speed: 90
  },
  personal: {
    guesses: ['Sarah', 'Jones', 'Sarah2024', 'Jones1995', 'Cybershield', 'Cybershield2024'],
    time: 'A few guesses',
    speed: 180
  }
};

const DEVICE_RESULTS = {
  router: { banner: 'Hijacked', detail: 'Attacker in control' },
  camera: { banner: 'Access denied', detail: 'Attacker locked out' },
  thermostat: { banner: 'Compromised', detail: 'Attacker in control' }
};

const MAP_NODES = {
  phishing: { x: 70, y: 62 },
  passwords: { x: 330, y: 62 },
  credentials: { x: 70, y: 232 },
  social: { x: 330, y: 232 }
};

const SERVER_POS = { x: 200, y: 147 };
const SVG_NS = 'http://www.w3.org/2000/svg';
const PERCENT = new Intl.NumberFormat(document.documentElement.lang || 'en', { style: 'percent' });
const reducedMotionQuery = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;

const state = {
  threatId: null,
  view: 'learn',
  progress: {},
  cluesFound: [],
  lastClue: null,
  methodsViewed: [],
  selectedMethod: null,
  deviceId: DEVICES[0].id,
  deviceAnswers: {},
  deviceOutcomeShown: {},
  social: { attack: null, target: null, strategy: null, outcome: null },
  defenseChoices: {},
  triedDefenses: {},
  newlyDefended: [],
  // One-time animation cues for the next render only.
  fx: {}
};

THREATS.forEach(function (threat) {
  state.progress[threat.id] = { learned: false, investigated: false, defended: false };
});

const main = document.getElementById('main');
const toolNav = document.getElementById('tool-nav');
const screenTitle = document.getElementById('screen-title');
const announcer = document.getElementById('announcer');
const integrity = document.getElementById('integrity');
const integrityValue = document.getElementById('integrity-value');
const integrityFill = document.getElementById('integrity-fill');
const integrityStatus = document.getElementById('integrity-status');

let crackTimer = null;

function prefersReducedMotion() {
  return Boolean(reducedMotionQuery && reducedMotionQuery.matches);
}

function el(tag, props, children) {
  const node = document.createElement(tag);
  Object.keys(props || {}).forEach(function (key) {
    const value = props[key];
    if (value === null || value === undefined || value === false) return;
    if (key === 'text') {
      node.textContent = value;
    } else if (key === 'className') {
      node.className = value;
    } else if (key === 'onClick') {
      node.addEventListener('click', value);
    } else {
      node.setAttribute(key, value === true ? '' : value);
    }
  });
  (children || []).forEach(function (child) {
    if (child) node.appendChild(typeof child === 'string' ? document.createTextNode(child) : child);
  });
  return node;
}

function svgEl(tag, attrs, text) {
  const node = document.createElementNS(SVG_NS, tag);
  Object.keys(attrs || {}).forEach(function (key) {
    node.setAttribute(key, attrs[key]);
  });
  if (text) node.textContent = text;
  return node;
}

function icon(name, className, size) {
  // Icons placed inside the network map are sized by attributes, so they skip the .icon CSS sizing.
  const iconClass = className ? `icon ${className}` : 'icon';
  const attrs = { class: size ? className : iconClass, 'aria-hidden': 'true', focusable: 'false' };
  if (size) {
    attrs.x = size.x;
    attrs.y = size.y;
    attrs.width = size.w;
    attrs.height = size.w;
    attrs.viewBox = '0 0 24 24';
  }
  const svg = svgEl('svg', attrs);
  svg.appendChild(svgEl('use', { href: `#icon-${name}` }));
  return svg;
}

function iconBox(name) {
  return el('span', { className: 'icon-box' }, [icon(name)]);
}

function classes() {
  return Array.prototype.filter.call(arguments, Boolean).join(' ');
}

function chip(opts) {
  return el('span', {
    className: `chip chip-${opts.tone || 'accent'}`,
    'aria-hidden': opts.hidden ? 'true' : null
  }, [opts.icon ? icon(opts.icon, 'chip-icon') : null, opts.text]);
}

function button(label, onClick, options) {
  const opts = options || {};
  let children = opts.children || [label];
  if (opts.chip) children = children.concat([chip(opts.chip)]);
  return el('button', {
    type: 'button',
    className: classes(opts.className || 'btn', opts.fxClass),
    'data-key': opts.key,
    'aria-label': opts.ariaLabel,
    'aria-pressed': opts.pressed === undefined ? null : String(opts.pressed),
    disabled: opts.disabled,
    onClick: onClick
  }, children);
}

function selectedChip(isSelected, text) {
  return isSelected ? { text: text || 'Selected', icon: 'check', hidden: true } : null;
}

function banner(tone, iconName, text, extraClass) {
  return el('p', { className: classes('banner', `banner-${tone}`, extraClass) }, [icon(iconName, 'banner-icon'), text]);
}

function list(items) {
  return el('ul', { className: 'bullets' }, items.map(function (item) {
    return el('li', { text: item });
  }));
}

function announce(message) {
  announcer.textContent = '';
  window.setTimeout(function () {
    announcer.textContent = message;
  }, 50);
}

function getThreat(id) {
  return THREATS.filter(function (threat) { return threat.id === id; })[0];
}

function threatStatus(id) {
  const progress = state.progress[id];
  if (progress.defended) return 'defended';
  if (progress.investigated) return 'investigated';
  return 'notStarted';
}

function defendedRatio() {
  const defended = THREATS.filter(function (threat) { return state.progress[threat.id].defended; }).length;
  return defended / THREATS.length;
}

function markInvestigated(id) {
  state.progress[id].investigated = true;
}

function goTo(threatId, view) {
  state.threatId = threatId;
  state.view = view || 'learn';
  state.navHint = false;
  state.fx = { enter: true };
  render();
  screenTitle.focus();
}

function stopCrack() {
  if (crackTimer) window.clearInterval(crackTimer);
  crackTimer = null;
}

function render() {
  const active = document.activeElement;
  const activeKey = active && active.getAttribute ? active.getAttribute('data-key') : null;
  const fx = state.fx;
  state.fx = {};

  stopCrack();
  main.textContent = '';
  toolNav.textContent = '';

  if (state.threatId) {
    renderThreat(getThreat(state.threatId), fx);
  } else {
    renderDashboard(fx);
  }
  updateIntegrity();
  Array.prototype.forEach.call(document.querySelectorAll('.pageable'), paginate);

  if (activeKey) {
    const target = document.querySelector(`[data-key="${activeKey}"]`);
    if (target && !target.disabled) target.focus();
  }
}

/* Paging: a panel whose text doesn't fit is split into pages with Back and Next buttons,
   so the app never scrolls. Bigger screens usually get a single page and no buttons. */

function isPageHeader(node) {
  return ['feedback-title', 'banner', 'threat-level', 'learn-heading'].some(function (name) {
    return node.classList.contains(name);
  });
}

function addUnit(page, unit) {
  if (unit.tagName === 'LI') {
    let listEl = page.lastElementChild;
    if (!listEl || listEl.tagName !== 'UL') {
      listEl = el('ul', { className: 'bullets' });
      page.appendChild(listEl);
    }
    listEl.appendChild(unit);
  } else {
    page.appendChild(unit);
  }
}

function removeUnit(unit) {
  const parent = unit.parentNode;
  parent.removeChild(unit);
  if (parent.tagName === 'UL' && !parent.children.length) parent.parentNode.removeChild(parent);
}

function paginate(panel) {
  const maxHeight = panel.clientHeight;
  if (panel.scrollHeight <= maxHeight + 1) return;

  const nodes = Array.prototype.slice.call(panel.children);
  const header = [];
  while (nodes.length && isPageHeader(nodes[0])) header.push(nodes.shift());
  // Lists are split by item so a long list can continue on the next page.
  const units = [];
  nodes.forEach(function (node) {
    if (node.tagName === 'UL') units.push.apply(units, Array.prototype.slice.call(node.children));
    else units.push(node);
  });

  const status = el('p', { className: 'pager-status' });
  const back = button('Back', function () { showPage(current - 1); }, { className: 'pager-btn', key: 'pager-back' });
  const next = button('Next', function () { showPage(current + 1); }, { className: 'pager-btn pager-next', key: 'pager-next' });
  const pagesEl = el('div', { className: 'pages' });
  const pages = [];
  let current = 0;

  panel.textContent = '';
  header.forEach(function (node) { panel.appendChild(node); });
  panel.appendChild(pagesEl);
  panel.appendChild(el('div', { className: 'pager' }, [back, status, next]));
  status.textContent = 'Page 1 of 1';

  function newPage() {
    if (pages.length) pages[pages.length - 1].hidden = true;
    const page = el('div', { className: 'page', tabindex: '-1' });
    pagesEl.appendChild(page);
    pages.push(page);
    return page;
  }

  let page = newPage();
  let count = 0;
  units.forEach(function (unit) {
    addUnit(page, unit);
    count += 1;
    // A few pixels of slack keeps rounding from causing a scrollbar.
    if (count > 1 && panel.scrollHeight > maxHeight - 4) {
      removeUnit(unit);
      page = newPage();
      addUnit(page, unit);
      count = 1;
    }
  });

  function showPage(index) {
    current = Math.max(0, Math.min(index, pages.length - 1));
    pages.forEach(function (p, i) { p.hidden = i !== current; });
    status.textContent = `Page ${current + 1} of ${pages.length}`;
    back.disabled = current === 0;
    next.disabled = current === pages.length - 1;
    if (document.activeElement === back || document.activeElement === next || document.activeElement === document.body) {
      pages[current].focus();
    }
  }

  showPage(0);
}

let resizeTimer = null;
window.addEventListener('resize', function () {
  window.clearTimeout(resizeTimer);
  resizeTimer = window.setTimeout(render, 200);
});

function updateIntegrity() {
  const ratio = defendedRatio();
  let tone = 'danger';
  let status = 'Under attack';
  if (ratio === 1) {
    tone = 'safe';
    status = 'Network secure';
  } else if (ratio > 0) {
    tone = 'warn';
    status = 'Partially secured';
  }
  integrity.className = `integrity integrity-${tone}`;
  integrityValue.textContent = PERCENT.format(ratio);
  integrityFill.style.transform = `scaleX(${ratio})`;
  integrityStatus.textContent = status;
}

/* Dashboard */

function renderNetworkMap(justDefended) {
  const blocked = THREATS.filter(function (threat) { return state.progress[threat.id].defended; }).length;
  const svg = svgEl('svg', {
    class: 'network-map',
    viewBox: '0 0 400 300',
    role: 'img',
    'aria-label': `Network map: ${blocked} of ${THREATS.length} attack paths blocked`
  });

  THREATS.forEach(function (threat) {
    const pos = MAP_NODES[threat.id];
    const status = threatStatus(threat.id);
    const line = { x1: pos.x, y1: pos.y, x2: SERVER_POS.x, y2: SERVER_POS.y };
    svg.appendChild(svgEl('line', Object.assign({ class: `link link-${status}` }, line)));
    if (status !== 'defended') {
      svg.appendChild(svgEl('line', Object.assign({ class: `packets packets-${status}` }, line)));
    }
  });

  svg.appendChild(svgEl('circle', { class: 'server-ring', cx: SERVER_POS.x, cy: SERVER_POS.y, r: 36 }));
  svg.appendChild(svgEl('circle', { class: 'server-core', cx: SERVER_POS.x, cy: SERVER_POS.y, r: 28 }));
  svg.appendChild(icon('server', 'map-icon server-icon', { x: SERVER_POS.x - 15, y: SERVER_POS.y - 15, w: 30 }));
  svg.appendChild(svgEl('text', { class: 'map-label map-label-server', x: SERVER_POS.x, y: SERVER_POS.y + 54, 'text-anchor': 'middle' }, 'Cybershield Inc.'));

  THREATS.forEach(function (threat) {
    const pos = MAP_NODES[threat.id];
    const status = threatStatus(threat.id);
    const group = svgEl('g', { class: classes('map-node', `map-node-${status}`, justDefended.indexOf(threat.id) !== -1 && 'just-defended') });
    group.appendChild(svgEl('circle', { class: 'node-pulse', cx: pos.x, cy: pos.y, r: 26 }));
    group.appendChild(svgEl('circle', { class: 'node-core', cx: pos.x, cy: pos.y, r: 24 }));
    group.appendChild(icon(threat.icon, 'map-icon', { x: pos.x - 12, y: pos.y - 12, w: 24 }));
    // Labels sit on the side away from the server line and outside the pulse ring (radius 26 × 1.5).
    const labelY = pos.y < SERVER_POS.y ? pos.y - 46 : pos.y + 54;
    group.appendChild(svgEl('text', { class: 'map-label', x: pos.x, y: labelY, 'text-anchor': 'middle' }, threat.name));
    if (status === 'defended') {
      const badge = svgEl('g', { class: 'shield-badge' });
      badge.appendChild(svgEl('circle', { cx: pos.x + 20, cy: pos.y - 20, r: 13 }));
      badge.appendChild(icon('shield', 'map-icon', { x: pos.x + 11, y: pos.y - 29, w: 18 }));
      group.appendChild(badge);
    }
    svg.appendChild(group);
  });

  return svg;
}

function renderDashboard() {
  screenTitle.textContent = 'Security Dashboard';
  document.title = 'Security Dashboard – Identify, Defend, Reflect';

  const justDefended = state.newlyDefended;
  state.newlyDefended = [];

  // The analyst status fills the same two header rows that hold "All threats" and the steps on threat screens.
  const stopped = THREATS.filter(function (threat) { return state.progress[threat.id].defended; }).length;
  toolNav.hidden = false;
  toolNav.setAttribute('role', 'none');
  toolNav.appendChild(el('p', { className: 'analyst' }, [iconBox('user'), 'Cyber Analyst']));
  toolNav.appendChild(el('p', { className: 'nav-status', text: `Pick a threat to investigate. Threats stopped: ${stopped} of ${THREATS.length}.` }));

  const map = el('section', { className: 'panel map-panel', 'aria-labelledby': 'map-heading' }, [
    el('h2', { id: 'map-heading', className: 'panel-heading', text: 'Network map' }),
    renderNetworkMap(justDefended)
  ]);

  const alerts = el('section', { className: 'alerts', 'aria-labelledby': 'alerts-heading' }, [
    el('h2', { id: 'alerts-heading', className: 'panel-heading', text: 'Security alerts' }),
    el('ul', { className: 'alert-list' }, THREATS.map(function (threat) {
      const status = threatStatus(threat.id);
      const severity = SEVERITY[threat.id];
      return el('li', { className: classes('alert-item', `alert-${status}`, justDefended.indexOf(threat.id) !== -1 && 'just-defended') }, [
        button(threat.name, function () { goTo(threat.id, 'learn'); }, {
          className: 'threat-card',
          key: `open-${threat.id}`,
          children: [
            iconBox(threat.icon),
            el('span', { className: 'threat-card-text' }, [
              el('span', { className: 'threat-card-name', text: threat.name }),
              el('span', { className: 'alert-meta' }, [
                el('span', { className: `severity severity-${severity.id}`, text: severity.label }),
                el('span', { className: `status status-${status}` }, [
                  el('span', { className: 'status-light', 'aria-hidden': 'true' }),
                  STATUS_LABELS[status]
                ])
              ])
            ])
          ]
        })
      ]);
    }))
  ]);

  main.appendChild(el('div', { className: 'dashboard' }, [
    el('div', { className: 'dashboard-body' }, [alerts, map])
  ]));
}

/* Threat screens */

function stepState(viewId, progress) {
  const done = {
    learn: progress.learned || progress.investigated,
    investigate: progress.investigated,
    mitigation: progress.defended
  };
  if (done[viewId]) return 'done';
  if (viewId === 'mitigation' && !progress.investigated) return 'locked';
  return 'open';
}

const LOCKED_HINT = 'Finish Investigate to unlock Defend.';

function stepAriaLabel(view, number, stepStatus) {
  if (stepStatus === 'done') return `Step ${number}: ${view.label}, completed`;
  if (stepStatus === 'locked') return `Step ${number}: ${view.label}, unlocks after you finish investigating`;
  return `Step ${number}: ${view.label}`;
}

function renderToolNav() {
  toolNav.hidden = false;
  toolNav.removeAttribute('role');
  const progress = state.progress[state.threatId];

  toolNav.appendChild(el('button', {
    type: 'button',
    className: 'tool-btn tool-btn-home',
    'data-key': 'nav-dashboard',
    onClick: function () { goTo(null); }
  }, [iconBox('dashboard'), el('span', { className: 'tool-label', text: 'All threats' })]));

  const steps = el('ol', { className: 'nav-steps' }, VIEWS.map(function (view, index) {
    const number = index + 1;
    const stepStatus = stepState(view.id, progress);
    const isCurrent = state.view === view.id;
    const marker = isCurrent ? String(number)
      : stepStatus === 'done' ? icon('check', 'nav-step-icon')
      : stepStatus === 'locked' ? icon('lock', 'nav-step-icon')
      : String(number);
    return el('li', {}, [el('button', {
      type: 'button',
      className: classes('tool-btn', 'nav-step', `nav-step-${stepStatus}`),
      'data-key': `nav-${view.id}`,
      'aria-current': isCurrent ? 'step' : null,
      'aria-label': stepAriaLabel(view, number, stepStatus),
      'aria-disabled': stepStatus === 'locked' ? 'true' : null,
      onClick: function () {
        if (stepStatus === 'locked') {
          state.navHint = true;
          render();
          announce(LOCKED_HINT);
          return;
        }
        goTo(state.threatId, view.id);
      }
    }, [
      el('span', { className: 'nav-step-mark', 'aria-hidden': 'true' }, [marker]),
      el('span', { className: 'tool-label', 'aria-hidden': 'true', text: view.label })
    ])]);
  }));
  toolNav.appendChild(el('div', { className: 'nav-row' }, [
    steps,
    state.navHint ? el('p', { className: 'nav-hint', 'aria-hidden': 'true' }, [icon('lock', 'chip-icon'), LOCKED_HINT]) : null
  ]));
}

function renderThreat(threat, fx) {
  if (state.view === 'learn') state.progress[threat.id].learned = true;
  renderToolNav();
  const titles = {
    learn: threat.name,
    investigate: threat.investigateTitle,
    mitigation: threat.defense.title
  };
  screenTitle.textContent = titles[state.view];
  document.title = `${titles[state.view]} – Identify, Defend, Reflect`;

  if (state.view === 'learn') renderLearn(threat, fx);
  if (state.view === 'mitigation') renderMitigation(threat, fx);
  if (state.view === 'investigate') {
    if (threat.id === 'phishing') renderPhishing(fx);
    if (threat.id === 'passwords') renderPasswords(fx);
    if (threat.id === 'credentials') renderCredentials(fx);
    if (threat.id === 'social') renderSocial(fx);
  }
}

function renderFeedback(children, tone, fxClass) {
  return el('section', {
    className: classes('panel', 'feedback', 'pageable', tone && `feedback-${tone}`, fxClass),
    'aria-label': 'Feedback'
  }, children);
}

function nextStepButton(label) {
  return button(label, function () { goTo(state.threatId, 'mitigation'); }, {
    className: 'btn btn-primary',
    key: 'to-mitigation',
    children: [icon('shield'), label]
  });
}

const LEARN_ROWS = [
  { label: 'What it is', icon: 'threat' },
  { label: 'How it works', icon: 'unlock' },
  { label: 'Why it’s risky', icon: 'alert' }
];

function renderLearn(threat, fx) {
  const severity = SEVERITY[threat.id];
  main.appendChild(el('div', { className: 'split learn' }, [
    el('section',{ className: 'panel learn-text pageable', 'aria-labelledby': 'learn-heading' }, [
      el('p', { className: `threat-level severity-${severity.id}` }, [icon('alert', 'threat-level-icon'), `Threat level: ${severity.label}`]),
      el('h2', { id: 'learn-heading', className: 'learn-heading', text: 'About this threat' })
    ].concat(threat.learn.map(function (para, i) {
      // Each Learn line has the same job across threats: what it is, how it works, why it's risky.
      const row = LEARN_ROWS[i] || LEARN_ROWS[LEARN_ROWS.length - 1];
      return el('div', { className: 'learn-row' }, [
        el('span', { className: 'learn-row-icon' }, [icon(row.icon === 'threat' ? threat.icon : row.icon)]),
        el('div', null, [
          el('h3', { className: 'learn-row-label', text: row.label }),
          el('p', { text: para })
        ])
      ]);
    })).concat([
      button('Investigate the threat', function () { goTo(threat.id, 'investigate'); }, {
        className: 'btn btn-primary',
        key: 'start-investigation',
        children: [icon('search'), 'Investigate the threat']
      })
    ])),
    el('figure', { className: classes('learn-figure', fx.enter && 'scan-once') }, [
      el('img', { src: threat.image, alt: threat.imageAlt })
    ])
  ]));
}

/* Phishing */

function renderPhishing(fx) {
  const found = state.cluesFound;
  const complete = found.length === CLUE_COUNT;

  const emailBody = el('div', { className: 'email-body' }, EMAIL_PARAGRAPHS.map(function (para, p) {
    return el('p', { className: 'email-para' }, para.map(function (part, i) {
      const key = `email-${p}-${i}`;
      const isFound = Boolean(part.clue) && found.indexOf(part.clue) !== -1;
      return button(part.text, function () { checkEmailPart(part, key); }, {
        className: classes('email-part', part.strong && 'is-strong', part.link && 'is-link', part.block && 'is-block', isFound && 'is-found'),
        fxClass: fx.shake === key ? 'shake' : null,
        key: key,
        children: [
          part.text,
          isFound ? el('span', { className: classes('flag-chip', fx.clue === part.clue && 'stamp-in') }, [
            icon('flag', 'chip-icon'),
            el('span', { className: 'visually-hidden', text: '(red flag found)' })
          ]) : null
        ]
      });
    }));
  }));

  const email = el('section', {
    className: classes('email-window', fx.enter && 'scan-once', complete && 'is-quarantined'),
    'aria-label': 'Employee email'
  }, [
    el('div', { className: 'email-bar' }, [
      el('span', { className: 'email-dot dot-red' }),
      el('span', { className: 'email-dot dot-yellow' }),
      el('span', { className: 'email-bar-title', text: 'Email' })
    ]),
    emailBody,
    complete ? el('div', { className: classes('quarantine-stamp', fx.clue && 'stamp-in'), 'aria-hidden': 'true' }, [icon('lock', 'stamp-icon'), 'Quarantined']) : null
  ]);

  const analysis = el('div', { className: 'analysis' }, [
    complete ? null : el('p', { className: 'counter', text: `Red flags found: ${found.length} of ${CLUE_COUNT}` }),
    complete ? null : el('div', { className: 'segments', 'aria-hidden': 'true' }, Object.keys(CLUES).map(function (id, i) {
      return el('span', { className: classes('segment', i < found.length && 'is-on') });
    })),
    complete ? banner('good', 'lock', `Email quarantined. You found all ${CLUE_COUNT} red flags.`, 'analysis-banner') : null,
    complete ? nextStepButton('Choose the best defense') : null
  ]);

  let feedbackChildren;
  let tone = null;
  if (state.lastClue === 'none') {
    feedbackChildren = [
      el('h2', { className: 'feedback-title', text: 'Look closer' }),
      el('p', { text: 'This part of the email looks normal. Keep looking for details that seem off.' })
    ];
  } else if (state.lastClue) {
    const clue = CLUES[state.lastClue];
    tone = 'good';
    feedbackChildren = [
      el('h2', { className: 'feedback-title' }, [icon('flag', 'title-icon'), 'Great catch!']),
      el('p', { className: 'feedback-lead', text: clue.heading }),
      el('h3', { text: 'Why this is a red flag:' }),
      list(clue.list)
    ];
  } else {
    feedbackChildren = [
      el('h2', { className: 'feedback-title' }, [icon('search', 'title-icon'), 'Threat analysis']),
      el('p', { text: `Find the ${CLUE_COUNT} red flags. Click any part of the email that looks wrong.` })
    ];
  }

  main.appendChild(el('div', { className: 'split split-email' }, [
    email,
    el('div', { className: 'side' }, [
      analysis,
      renderFeedback(feedbackChildren, tone, (fx.clue || fx.shake) && 'pop-in')
    ])
  ]));
}

function checkEmailPart(part, key) {
  if (!part.clue) {
    state.lastClue = 'none';
    state.fx = { shake: key };
    render();
    announce('Look closer. This part of the email looks normal.');
    return;
  }
  if (state.cluesFound.indexOf(part.clue) === -1) state.cluesFound.push(part.clue);
  state.lastClue = part.clue;
  if (state.cluesFound.length === CLUE_COUNT) markInvestigated('phishing');
  state.fx = { clue: part.clue };
  render();
  announce(`Great catch! ${CLUES[part.clue].heading} Red flags found: ${state.cluesFound.length} of ${CLUE_COUNT}.`);
}

/* Weak passwords */

function renderPasswords(fx) {
  const methods = el('ul', { className: 'choice-list' }, PASSWORD_METHODS.map(function (method) {
    const selected = state.selectedMethod === method.id;
    const viewed = state.methodsViewed.indexOf(method.id) !== -1;
    return el('li', null, [
      button(method.name, function () { selectMethod(method.id); }, {
        className: 'choice-card',
        key: `method-${method.id}`,
        pressed: selected,
        chip: viewed ? { text: 'Cracked', icon: 'unlock', tone: 'bad' } : null,
        children: [
          el('span', { className: 'choice-name', text: method.name }),
          el('span', { className: 'choice-summary', text: method.summary })
        ]
      })
    ]);
  }));

  const intro = el('p', { className: 'side-intro', text: 'These three password-cracking methods are commonly used by attackers. Click a method to see how it works and why it’s dangerous.' });

  const method = PASSWORD_METHODS.filter(function (m) { return m.id === state.selectedMethod; })[0];
  const animate = Boolean(method) && fx.crack === method.id && !prefersReducedMotion();
  const allTested = state.methodsViewed.length === PASSWORD_METHODS.length;
  let detail;

  if (method) {
    const run = CRACK_RUNS[method.id];
    const cracked = run.guesses[run.guesses.length - 1];
    const justCracked = fx.crackDone === method.id;
    const terminal = el('div', { className: 'terminal' }, [
      el('p', { className: 'terminal-label', text: 'Employee account password' }),
      el('p', { className: classes('terminal-field', !animate && 'is-cracked', justCracked && 'stamp-in'), id: 'crack-field', 'aria-hidden': 'true', text: animate ? run.guesses[0] : cracked }),
      el('p', { className: classes('terminal-status', !animate && 'is-cracked', justCracked && 'stamp-in') },
        animate ? [icon('search', 'chip-icon'), 'Cracking…'] : [icon('unlock', 'chip-icon'), 'Password cracked']),
      animate ? null : el('p', { className: 'terminal-time', text: `Time to crack: ${run.time}` })
    ]);

    detail = [terminal];
    if (!animate) {
      detail = detail.concat([
        el('h2', { className: classes('crack-title', justCracked && 'pop-in'), text: method.name }),
        el('p', { text: method.how }),
        el('h3', { text: 'Consequence' }),
        el('p', { text: method.consequence }),
        el('h3', { text: 'Best defense' }),
        list(method.defense)
      ]);
    }
  } else {
    detail = [
      el('div', { className: 'terminal' }, [
        el('p', { className: 'terminal-label', text: 'Employee account password' }),
        el('p', { className: 'terminal-field', 'aria-hidden': 'true', text: '********' }),
        el('p', { className: 'terminal-status', text: 'Choose a method to test it.' })
      ])
    ];
  }

  main.appendChild(el('div', { className: 'split split-narrow-first' }, [
    el('div', { className: 'side' }, [
      intro,
      methods,
      allTested ? el('p', { className: 'done-note', text: 'You tested all three methods.' }) : null,
      allTested ? nextStepButton('Explore defenses against weak passwords') : null
    ]),
    renderFeedback(detail, method ? 'bad' : null)
  ]));

  if (animate) startCrack(method);
}

function startCrack(method) {
  const run = CRACK_RUNS[method.id];
  const field = document.getElementById('crack-field');
  let index = 0;
  crackTimer = window.setInterval(function () {
    index += 1;
    if (index < run.guesses.length) {
      field.textContent = run.guesses[index];
      return;
    }
    stopCrack();
    state.fx = { crackDone: method.id };
    render();
    announce(`Password cracked: ${run.guesses[run.guesses.length - 1]}. Time to crack: ${run.time}. ${method.how}`);
  }, run.speed);
}

function selectMethod(id) {
  const method = PASSWORD_METHODS.filter(function (m) { return m.id === id; })[0];
  state.selectedMethod = id;
  if (state.methodsViewed.indexOf(id) === -1) state.methodsViewed.push(id);
  if (state.methodsViewed.length === PASSWORD_METHODS.length) markInvestigated('passwords');
  state.fx = { crack: id };
  render();
  if (prefersReducedMotion()) {
    const run = CRACK_RUNS[id];
    announce(`Password cracked: ${run.guesses[run.guesses.length - 1]}. Time to crack: ${run.time}. ${method.how}`);
  } else {
    announce(`Running ${method.name}.`);
  }
}

/* Default credentials */

function renderCredentials(fx) {
  const device = DEVICES.filter(function (d) { return d.id === state.deviceId; })[0];
  const answer = state.deviceAnswers[device.id];
  const outcomeShown = Boolean(state.deviceOutcomeShown[device.id]);
  const result = DEVICE_RESULTS[device.id];

  const deviceList = el('ul', { className: 'device-list', 'aria-label': 'Devices to audit' }, DEVICES.map(function (d) {
    const audited = Boolean(state.deviceAnswers[d.id]);
    const current = d.id === device.id;
    return el('li', null, [
      button(d.name, function () { selectDevice(d.id); }, {
        className: 'device-btn',
        key: `device-${d.id}`,
        pressed: current,
        chip: selectedChip(current, 'Auditing'),
        children: [
          iconBox(d.icon),
          el('span', { className: 'device-btn-text' }, [
            el('span', { className: 'choice-name', text: d.name }),
            el('span', { className: 'choice-summary', text: audited ? 'Audited' : 'Not audited' })
          ])
        ]
      })
    ]);
  }));

  let artState = 'neutral';
  if (outcomeShown) artState = device.secure ? 'safe' : 'hijacked';
  let artFx = null;
  if (fx.outcome) artFx = device.secure ? 'pulse-safe' : 'glitch';

  const art = el('div', { className: classes('device-art', `device-${artState}`, artFx) }, [
    icon(device.icon, 'device-art-icon'),
    outcomeShown ? el('span', { className: 'device-badge' }, [icon(device.secure ? 'lock' : 'unlock')]) : null
  ]);

  const login = el('section', { className: 'login-card', 'aria-labelledby': 'login-title' }, [
    el('h2', { id: 'login-title', className: 'login-title', text: device.loginTitle }),
    el('dl', { className: 'login-fields' }, [
      el('dt', { text: 'Username:' }),
      el('dd', { className: 'mono', text: device.username }),
      el('dt', { text: 'Password:' }),
      el('dd', { className: 'mono', text: device.password })
    ])
  ]);

  const verdictButtons = el('div', { className: 'verdict-row', role: 'group', 'aria-label': 'Are these credentials secure?' }, [
    button('Secure', function () { answerDevice('secure'); }, {
      className: 'verdict-btn verdict-secure',
      key: 'verdict-secure',
      pressed: answer === 'secure',
      chip: selectedChip(answer === 'secure', 'Your call'),
      children: [icon('check'), 'Secure']
    }),
    button('Not Secure', function () { answerDevice('notSecure'); }, {
      className: 'verdict-btn verdict-not-secure',
      key: 'verdict-not-secure',
      pressed: answer === 'notSecure',
      chip: selectedChip(answer === 'notSecure', 'Your call'),
      children: [icon('x'), 'Not Secure']
    })
  ]);

  const deviceCenter = el('div', { className: classes('device-center', (fx.enter || fx.device) && 'scan-once') }, [
    art,
    outcomeShown ? el('div', { className: classes('device-result', `device-result-${artState}`, fx.outcome && 'stamp-in') }, [
      el('strong', { text: result.banner }),
      el('span', { text: result.detail })
    ]) : null,
    login,
    // Once the outcome is showing the call is final, so the verdict buttons make room for the result.
    outcomeShown ? null : el('p', { className: 'verdict-prompt', text: 'Are these credentials secure or not?' }),
    outcomeShown ? null : verdictButtons
  ]);

  let feedback;
  if (!answer) {
    feedback = renderFeedback([
      el('h2', { className: 'feedback-title' }, [icon('search', 'title-icon'), `Audit: ${device.name}`]),
      el('p', { text: device.risk || 'Decide whether these credentials are secure or not.' })
    ]);
  } else {
    const correct = (answer === 'secure') === device.secure;
    const children = [
      el('h2', { className: 'feedback-title' }, [icon(correct ? 'check' : 'x', 'title-icon'), correct ? 'Correct!' : 'Incorrect!']),
      el('p', { className: 'feedback-lead', text: device.verdictTitle }),
      el('p', { text: device.verdict })
    ];
    if (outcomeShown) {
      children.push(el('h3', { text: 'What happens next?' }));
      children.push(el('p', { className: 'feedback-lead', text: device.outcomeTitle }));
      children.push(el('p', { text: device.outcome.join(' ') }));
      const next = DEVICES.filter(function (d) { return !state.deviceAnswers[d.id]; })[0];
      if (next) {
        children.push(button('Audit another device', function () { selectDevice(next.id); }, { className: 'btn btn-primary', key: 'next-device' }));
      } else {
        children.push(el('p', { className: 'done-note', text: 'You audited all three devices.' }));
        children.push(nextStepButton('Explore defenses against default credentials'));
      }
    } else {
      children.push(button('See what happens next', showDeviceOutcome, { className: 'btn btn-primary', key: 'show-outcome' }));
    }
    let panelFx = null;
    if (fx.verdict) panelFx = correct ? 'pop-in' : 'shake';
    feedback = renderFeedback(children, correct ? 'good' : 'bad', panelFx);
  }

  main.appendChild(el('div', { className: 'credentials' }, [deviceList, deviceCenter, feedback]));
}

function selectDevice(id) {
  state.deviceId = id;
  state.fx = { device: true };
  render();
}

function answerDevice(answer) {
  const device = DEVICES.filter(function (d) { return d.id === state.deviceId; })[0];
  state.deviceAnswers[device.id] = answer;
  state.deviceOutcomeShown[device.id] = false;
  if (Object.keys(state.deviceAnswers).length === DEVICES.length) markInvestigated('credentials');
  state.fx = { verdict: true };
  render();
  const correct = (answer === 'secure') === device.secure;
  announce(`${correct ? 'Correct!' : 'Incorrect!'} ${device.verdictTitle}. ${device.verdict}`);
}

function showDeviceOutcome() {
  const device = DEVICES.filter(function (d) { return d.id === state.deviceId; })[0];
  state.deviceOutcomeShown[device.id] = true;
  state.fx = { outcome: true };
  render();
  announce(`${DEVICE_RESULTS[device.id].banner}. ${device.outcomeTitle}. ${device.outcome.join(' ')}`);
}

/* Social engineering */

function scenariosMatching(filter) {
  return SCENARIOS.filter(function (s) {
    return Object.keys(filter).every(function (key) { return s[key] === filter[key]; });
  });
}

function unique(values) {
  return values.filter(function (value, i) { return values.indexOf(value) === i; });
}

function renderSocialStep(number, title, hint, options, selected, onSelect, keyPrefix) {
  const body = options
    ? el('ul', { className: 'step-options' }, options.map(function (option) {
      return el('li', null, [
        button(option.label, function () { onSelect(option.id); }, {
          className: 'step-btn',
          key: `${keyPrefix}-${option.id}`,
          pressed: selected === option.id,
          chip: selectedChip(selected === option.id),
          children: [option.icon ? icon(option.icon, 'step-icon') : null, option.label]
        })
      ]);
    }))
    : el('p', { className: 'step-locked' }, [icon('lock', 'chip-icon'), hint]);

  return el('section', { className: classes('panel', 'step', selected && 'is-done', !options && 'is-locked'), 'aria-labelledby': `${keyPrefix}-heading` }, [
    el('h2', { id: `${keyPrefix}-heading`, className: 'step-title' }, [
      el('span', { className: 'step-number', text: String(number) }),
      title
    ]),
    options ? el('p', { className: 'step-hint', text: hint }) : null,
    body
  ]);
}

function renderAttackPath(s, fx) {
  return el('div', { className: classes('attack-path', `path-${s.outcome || 'ready'}`, fx.outcome && 'run'), 'aria-hidden': 'true' }, [
    el('span', { className: 'path-node path-attacker' }, [icon('spy'), el('span', { className: 'path-label', text: 'Attacker' })]),
    el('span', { className: 'path-track' }, [
      el('span', { className: 'path-packet' }),
      s.outcome === 'strong' ? el('span', { className: 'path-shield' }, [icon('shield')]) : null
    ]),
    el('span', { className: 'path-node path-target' }, [icon('user'), el('span', { className: 'path-label', text: TARGETS[s.target] })])
  ]);
}

function renderSocial(fx) {
  const s = state.social;

  const attackStep = renderSocialStep(1, 'Attack type',
    'Cybercriminals use different social engineering tactics to manipulate people and gain access to sensitive information.',
    ATTACK_TYPES, s.attack, function (id) {
      state.social = { attack: id, target: null, strategy: null, outcome: null };
      render();
    }, 'attack');

  const targetOptions = s.attack
    ? unique(scenariosMatching({ attack: s.attack }).map(function (sc) { return sc.target; }))
      .map(function (id) { return { id: id, label: TARGETS[id], icon: 'user' }; })
    : null;
  const targetStep = renderSocialStep(2, 'Target',
    s.attack ? 'Different targets respond to social engineering attacks in different ways.' : 'Choose an attack type first.',
    targetOptions, s.target, function (id) {
      state.social.target = id;
      state.social.strategy = null;
      state.social.outcome = null;
      render();
    }, 'target');

  const strategyOptions = s.target
    ? scenariosMatching({ attack: s.attack, target: s.target })
      .map(function (sc) { return { id: sc.strategy, label: STRATEGIES[sc.strategy].label }; })
    : null;
  const strategyStep = renderSocialStep(3, 'Manipulation strategy',
    s.target ? 'Social engineers use psychological tactics to make their attacks more convincing.' : 'Choose a target first.',
    strategyOptions, s.strategy, function (id) {
      state.social.strategy = id;
      state.social.outcome = null;
      state.fx = { armed: true };
      render();
      announce(STRATEGIES[id].text);
    }, 'strategy');

  let result;
  if (s.strategy) {
    const scenario = scenariosMatching({ attack: s.attack, target: s.target, strategy: s.strategy })[0];
    const labels = scenario.physical ? PHYSICAL_LABELS : TRAINING_LABELS;
    const children = [
      el('h2', { className: 'feedback-title' }, [icon('spy', 'title-icon'), 'Your attack']),
      renderAttackPath(s, fx),
      el('p', { className: 'strategy-note' }, [el('strong', { text: STRATEGIES[s.strategy].label }), `: ${STRATEGIES[s.strategy].text}`])
    ];
    if (s.outcome) {
      // The result replaces the scenario and outcome choice so the panel fits without scrolling.
      const blocked = s.outcome === 'strong';
      const other = blocked ? 'weak' : 'strong';
      children.push(el('div', { className: `outcome-result outcome-result-${s.outcome}` }, [
        banner(blocked ? 'good' : 'bad', blocked ? 'shield' : 'alert', blocked ? 'Attack blocked' : 'Breach detected', fx.outcome && 'stamp-in delayed'),
        el('h3', { text: labels[s.outcome] }),
        el('p', { text: scenario[s.outcome].join(' ') })
      ]));
      children.push(el('div', { className: 'action-row' }, [
        button('See the other outcome', function () { chooseOutcome(other, labels[other], scenario[other]); }, {
          className: 'btn',
          key: 'outcome-other',
          ariaLabel: `See the outcome with ${labels[other]}`
        }),
        button('Try another attack type', function () {
          state.social = { attack: null, target: null, strategy: null, outcome: null };
          render();
          const first = document.querySelector('[data-key="attack-phishing"]');
          if (first) first.focus();
        }, { className: 'btn', key: 'restart-social' }),
        nextStepButton('Choose the best defense')
      ]));
    } else {
      children.push(el('p', { text: scenario.text }));
      children.push(el('p', { className: 'feedback-lead', text: 'Choose an outcome based on the strength of the security awareness training at the company.' }));
      children.push(el('div', { className: 'outcome-row' }, ['strong', 'weak'].map(function (level) {
        return button(labels[level], function () { chooseOutcome(level, labels[level], scenario[level]); }, {
          className: `outcome-btn outcome-${level}`,
          key: `outcome-${level}`
        });
      })));
    }
    let tone = null;
    if (s.outcome) tone = s.outcome === 'strong' ? 'good' : 'bad';
    result = renderFeedback(children, tone, fx.armed && 'pop-in');
  } else {
    result = renderFeedback([
      el('h2', { className: 'feedback-title' }, [icon('spy', 'title-icon'), 'Your attack']),
      el('p', { text: 'Build an attack to see how it plays out.' })
    ]);
  }

  main.appendChild(el('div', { className: 'social' }, [
    el('div', { className: 'steps' }, [attackStep, targetStep, strategyStep]),
    result
  ]));
}

function chooseOutcome(level, label, lines) {
  state.social.outcome = level;
  markInvestigated('social');
  state.fx = { outcome: true };
  render();
  const verdict = level === 'strong' ? 'Attack blocked.' : 'Breach detected.';
  announce(`${verdict} ${label}. ${lines.join(' ')}`);
}

/* Mitigation */

function renderMitigation(threat, fx) {
  const choice = state.defenseChoices[threat.id];
  const tried = state.triedDefenses[threat.id] || [];
  const defended = state.progress[threat.id].defended;

  const options = el('ul', { className: 'defense-list' }, threat.defense.options.map(function (option, i) {
    let optionChip = null;
    if (option.correct && defended) optionChip = { text: 'Deployed', icon: 'shield', tone: 'good' };
    else if (tried.indexOf(i) !== -1) optionChip = { text: 'Didn’t stop it', icon: 'x', tone: 'bad' };
    return el('li', null, [
      button(option.label, function () { chooseDefense(threat, i); }, {
        className: classes('defense-btn', option.correct && defended && 'is-deployed', tried.indexOf(i) !== -1 && 'is-failed'),
        key: `defense-${i}`,
        pressed: choice === i,
        chip: optionChip
      })
    ]);
  }));

  let feedback;
  if (choice === undefined) {
    feedback = renderFeedback([
      el('h2', { className: 'feedback-title' }, [icon('shield', 'title-icon'), 'Choose a defense']),
      el('p', { text: 'You’ll see what each security measure does and whether it’s the best fit.' })
    ]);
  } else {
    const option = threat.defense.options[choice];
    const children = [
      option.correct
        ? banner('good', 'shield', 'Defense deployed', fx.defense && 'deploy')
        : banner('bad', 'alert', 'Attack got through', fx.defense && 'stamp-in'),
      el('h2', { className: 'feedback-title' }, [
        icon(option.correct ? 'check' : 'x', 'title-icon'),
        option.correct ? 'That’s right!' : 'Not quite!'
      ]),
      el('p', { className: 'feedback-lead', text: option.label })
    ];
    option.sections.forEach(function (section) {
      children.push(el('h3', { text: section.heading }));
      children.push(section.list ? list(section.list) : el('p', { text: section.text }));
    });
    if (option.correct) {
      children.push(el('p', { className: 'done-note', text: `Threat neutralized. Network integrity: ${PERCENT.format(defendedRatio())}` }));
      children.push(button('Return to the security dashboard', function () { goTo(null); }, {
        className: 'btn btn-primary',
        key: 'back-dashboard',
        children: [icon('dashboard'), 'Return to the security dashboard']
      }));
    }
    let panelFx = null;
    if (fx.defense) panelFx = option.correct ? 'pop-in' : 'shake';
    feedback = renderFeedback(children, option.correct ? 'good' : 'bad', panelFx);
  }

  main.appendChild(el('div', { className: 'split split-narrow-first' }, [
    el('div', { className: 'side' }, [
      el('p', { className: 'question', text: threat.defense.question }),
      options
    ]),
    feedback
  ]));
}

function chooseDefense(threat, index) {
  const option = threat.defense.options[index];
  state.defenseChoices[threat.id] = index;
  if (option.correct) {
    if (!state.progress[threat.id].defended) state.newlyDefended.push(threat.id);
    state.progress[threat.id].defended = true;
  } else {
    const tried = state.triedDefenses[threat.id] || [];
    if (tried.indexOf(index) === -1) tried.push(index);
    state.triedDefenses[threat.id] = tried;
  }
  state.fx = { defense: true };
  render();
  announce(option.correct
    ? `Defense deployed. That’s right! ${option.label}. Network integrity: ${PERCENT.format(defendedRatio())}.`
    : `Attack got through. Not quite! ${option.label}.`);
}

try {
  render();
} catch (error) {
  main.textContent = '';
  main.appendChild(el('p', { className: 'error-note', text: 'Something went wrong loading this activity. Try refreshing the page.' }));
}
