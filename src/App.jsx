import { useRef, useState } from 'react';
import './App.css';

const navItems = [
  { id: 'about-section', label: '소개' },
  { id: 'plan-section', label: '기획서' },
  { id: 'video-section', label: '영상' },
  { id: 'project-section', label: '포트폴리오' },
  { id: 'contact-section', label: '연락처' },
];

const aboutCards = [
  {
    id: 'name',
    title: '이름',
    description: '나수련',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="8" r="3.4" />
        <path d="M5.5 19c1.6-3 4-4.5 6.5-4.5S16.9 16 18.5 19" />
      </svg>
    ),
  },
  {
    id: 'interest',
    title: '관심 분야',
    description: 'UI/UX 디자인, 영상 기획, 영상 제작',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3l2.7 5.5L20 11l-5.3 2.5L12 19l-2.7-5.5L4 11l5.3-2.5L12 3z" />
      </svg>
    ),
  },
  {
    id: 'strength',
    title: '강점',
    description: '사용자 경험을 고려하여 아이디어를 시각적으로 명확하게 정리합니다.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.5l2.4 6.1 6.1 2.4-6.1 2.4L12 19.5l-2.4-6.1-6.1-2.4 6.1-2.4L12 2.5z" />
      </svg>
    ),
  },
  {
    id: 'goal',
    title: '목표',
    description: '디자인과 영상의 시너지를 통해 브랜드의 가치를 극대화하는 크리에이터로 성장하는 것',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 12h12" />
        <path d="M12 6l6 6-6 6" />
      </svg>
    ),
  },
];

const planCards = [
  {
    id: 'intent',
    title: '기획 의도',
    description:
      '단순한 서비스 소개를 넘어, 브랜드가 지향하는 고품격 라이프스타일과 독창적인 공간 경험을 시각적으로 아카이빙합니다.',
    details: '브랜드의 톤앤매너와 공간의 분위기를 함께 보여주는 영상 콘셉트를 중심으로 구성했습니다.',
  },
  {
    id: 'target',
    title: '타겟 사용자',
    description: '최고 수준의 가치와 미학적 경험을 추구하는 프리미엄 고객군입니다.',
    details: '브랜드를 찾는 고객이 어떤 감정과 기대를 가지고 있는지에 맞춰 메시지를 정리했습니다.',
  },
  {
    id: 'message',
    title: '핵심 메시지',
    description: '"완벽한 몰입, 당신만을 위한 단 하나의 서사."',
    details: '짧지만 선명한 문장으로 브랜드의 감도와 몰입감을 한 번에 전달하는 방향을 담았습니다.',
  },
  {
    id: 'impact',
    title: '기대 효과',
    description: '감성적 연결을 통한 브랜드 로열티 강화 및 프리미엄 이미지 포지셔닝 성공을 기대합니다.',
    details: '영상과 기획이 함께 작동해 브랜드 인상을 오래 남기도록 설계했습니다.',
  },
];

const projectCards = [
  {
    id: 'project-hospitality',
    title: '[Hospitality] 아난티 호텔',
    description: '고객의 여가와 머무름을 하나의 경험으로 재해석한 프리미엄 공간 기획 및 UI/UX 리뉴얼입니다.',
    role: '기획 100%, 디자인 100%, 영상 디렉션',
    linkLabel: '링크 보기',
    linkHref: 'https://portfolio.na-suryeon.com',
  },
  {
    id: 'project-beauty',
    title: '[Beauty] 하이엔드 코스메틱',
    description: '피부에 닿는 질감과 럭셔리 감성을 극대화한 이커머스 플랫폼 설계 및 비주얼 브랜딩입니다.',
    role: 'UI 구성, 인터랙션 기획, 비주얼 가이드',
  },
  {
    id: 'project-lifestyle',
    title: '[Lifestyle] 아티잔 베이킹',
    description: '천연 발효와 정성의 시간을 시각적 서사로 정돈한 프리미엄 베이킹 아카데미 플랫폼 디자인입니다.',
    role: '브랜드 아이덴티티, 텍스트 스토리텔링, UI/UX 디자인',
  },
];
const videoCards = [
  { title: '추가 영상 01', description: '아난티 호텔의 리조트 공간 중심 무드 필름과 감성적인 브랜드 톤을 담은 영상입니다.' },
  { title: '추가 영상 02', description: '하이엔드 코스메틱의 질감과 미학적 분위기를 정갈하게 보여주는 영상입니다.' },
  { title: '추가 영상 03', description: '아티잔 베이킹의 천연 발효와 손맛의 서사를 시네마틱하게 정리한 영상입니다.' },
];

const skillCards = [
  {
    id: 'planning',
    title: '기획력',
    description: '메시지와 흐름을 정리해 설득력 있는 구조를 만듭니다.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 6h16" />
        <path d="M4 12h10" />
        <path d="M4 18h13" />
      </svg>
    ),
    bars: [72, 88, 66, 92],
  },
  {
    id: 'design',
    title: '디자인 이해',
    description: '시각 결정이 방향성과 인상에 미치는 영향을 이해합니다.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 20h16" />
        <path d="M7 16V8" />
        <path d="M12 16V5" />
        <path d="M17 16v-7" />
      </svg>
    ),
    bars: [58, 80, 64, 90],
  },
  {
    id: 'video',
    title: '영상 제작',
    description: '구성, 편집, 리듬을 통해 완성도 있는 영상을 만듭니다.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 7h10v10H5z" />
        <path d="M15 10l4-3v10l-4-3z" />
      </svg>
    ),
    bars: [84, 70, 92, 76],
  },
  {
    id: 'frontend',
    title: '프론트엔드 구현',
    description: '보이는 구조를 안정적으로 구현하고 정리합니다.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M9 6 4 12l5 6" />
        <path d="M15 6l5 6-5 6" />
      </svg>
    ),
    bars: [64, 76, 84, 70],
  },
];

const footerSocials = [
  {
    label: 'Naver Blog',
    href: 'https://blog.naver.com/ydaun',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6 6h4.2l3.8 6.2V6H18v12h-4l-4-6.5V18H6z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="5" y="5" width="14" height="14" rx="4" />
        <circle cx="12" cy="12" r="3.5" />
        <circle cx="16.8" cy="7.2" r="1" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M10 9l6 3-6 3V9z" />
        <rect x="4" y="6.5" width="16" height="11" rx="3" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 10v8" />
        <circle cx="7" cy="7" r="1.2" />
        <path d="M11 18v-5c0-1.7 1-3 2.8-3s2.7 1.3 2.7 3v5" />
        <path d="M11 13.2V18" />
      </svg>
    ),
  },
];

const footerLinks = [
  { label: '소개', href: '#about-section' },
  { label: '기획서', href: '#plan-section' },
  { label: '영상', href: '#video-section' },
  { label: '포트폴리오', href: '#project-section' },
];

function IconCard({ icon, title, description }) {
  return (
    <article className="about-card">
      <div className="card-head">
        <span className="card-icon" aria-hidden="true">
          {icon}
        </span>
        <h3>{title}</h3>
      </div>
      <p>{description}</p>
    </article>
  );
}

function SkillCard({ icon, title, description, bars, index }) {
  return (
    <article className="skills-card">
      <div className="card-head">
        <span className="card-icon" aria-hidden="true">
          {icon}
        </span>
        <h3>{title}</h3>
      </div>
      <p>{description}</p>
      <div className="skill-chart" aria-hidden="true">
        {bars.map((bar, barIndex) => (
          <span
            key={`${title}-${barIndex}`}
            className="skill-bar"
            style={{
              '--bar-height': `${bar}%`,
              '--bar-delay': `${index * 0.12 + barIndex * 0.08}s`,
            }}
          />
        ))}
      </div>
    </article>
  );
}

function FooterSocial({ label, href, icon }) {
  const toneClass = `footer-social-link ${label === 'Naver Blog' ? 'is-naver' : label === 'Instagram' ? 'is-instagram' : label === 'YouTube' ? 'is-youtube' : 'is-linkedin'}`;

  return (
    <a className={toneClass} href={href} target="_blank" rel="noreferrer" aria-label={label}>
      <span className="footer-social-icon" aria-hidden="true">
        {icon}
      </span>
      <span>{label}</span>
    </a>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePlan, setActivePlan] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState({});
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [contactStatus, setContactStatus] = useState('');
  const uploadRefs = useRef({});

  const scrollToSection = (sectionId) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMenuOpen(false);
  };

  const openUploadPicker = (cardId) => {
    uploadRefs.current[cardId]?.click();
  };

  const handleFileChange = (cardId, event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploadedFiles((current) => ({
      ...current,
      [cardId]: file.name,
    }));

    event.target.value = '';
  };

  const downloadPlan = (card) => {
    const content = `${card.title}\n\n${card.description}\n\n${card.details}\n`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${card.title}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleContactChange = (event) => {
    const { name, value } = event.target;
    setContactForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleContactSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(`[포트폴리오 문의] ${contactForm.name || '익명'}`);
    const body = encodeURIComponent(
      `이름: ${contactForm.name || '-'}\n이메일: ${contactForm.email || '-'}\n\n${contactForm.message || '-'}`
    );

    window.location.href = `mailto:ydaun@naver.com?subject=${subject}&body=${body}`;
    setContactStatus('메일 앱으로 전송 창을 열었습니다.');
  };

  return (
    <main className="page">
      <header className="page-header">
        <div className="header-bar">
          <div className="site-title">
            <span>나수련</span>
            <span>| UI/UX Design & Video Production</span>
          </div>
          <button
            type="button"
            className="menu-toggle"
            aria-label="메뉴 열기"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="menu-icon" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span className="menu-toggle-label">메뉴</span>
          </button>
        </div>
        <nav id="primary-navigation" className={`site-nav${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
          {navItems.map((item) => (
            <button key={item.id} type="button" onClick={() => scrollToSection(item.id)}>
              {item.label}
            </button>
          ))}
        </nav>
      </header>

      <section className="hero" id="hero-section">
        <div className="hero-layout">
          <div className="hero-media" aria-hidden="false">
          <img src="/portfolio/profile-photo.jpg" alt="나수련 프로필 사진" className="profile-photo" />
          </div>
          <div className="hero-content">
            <h1>디자인과 영상으로 프리미엄 브랜드의 경험을 설계하는 나수련입니다.</h1>
            <p className="hero-intro">
              UI/UX 디자인과 감각적인 영상 제작을 통해, 브랜드가 가진 고유의 가치를 시각적 스토리텔링으로 구현합니다.
            </p>
            <p className="hero-description">
              프리미엄 브랜드의 톤앤매너를 설계하고, 유저와 서비스가 지닌 품격의 순간을 정교하게 전달합니다.
            </p>
            <div className="hero-actions">
              <button type="button" onClick={() => scrollToSection('plan-section')}>
                기획서 보기
              </button>
              <button type="button" onClick={() => scrollToSection('video-section')}>
                영상 보기
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section" id="about-section">
        <h2>자기소개</h2>
        <div className="about-cards">
          {aboutCards.map((card) => (
            <IconCard key={card.id} icon={card.icon} title={card.title} description={card.description} />
          ))}
        </div>
      </section>

      <section className="plan-section" id="plan-section">
        <h2>영상 기획서 소개</h2>
        <div className="plan-cards">
          {planCards.map((card) => (
            <article className="plan-card" key={card.id}>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <div className="plan-card-actions">
                <button type="button" onClick={() => openUploadPicker(card.id)}>
                  업로드
                </button>
                <button type="button" onClick={() => downloadPlan(card)}>
                  다운로드
                </button>
                <button type="button" onClick={() => setActivePlan(card)}>
                  모달 보기
                </button>
              </div>
              <input
                ref={(node) => {
                  uploadRefs.current[card.id] = node;
                }}
                className="hidden-file-input"
                type="file"
                accept=".pdf,.txt,.doc,.docx,.ppt,.pptx"
                onChange={(event) => handleFileChange(card.id, event)}
              />
              <p className="upload-status">
                {uploadedFiles[card.id] ? `업로드됨: ${uploadedFiles[card.id]}` : '업로드 파일 없음'}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="video-section" id="video-section">
        <h2>자기소개 영상</h2>
        <div className="video-placeholder">
          <span className="play-mark" aria-hidden="true">
            ▶
          </span>
          <p>영상 미리보기 영역</p>
        </div>
      </section>

      <section className="video-archive-section" id="video-archive-section">
        <h2>추가 영상</h2>
        <div className="video-cards">
          {videoCards.map((card, index) => (
            <article className="video-card" key={card.title}>
              <div className="video-card-preview">
                <span>영상 {String(index + 1).padStart(2, '0')}</span>
              </div>
              <div className="video-card-body">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <button type="button">업로드</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="project-section" id="project-section">
        <h2>포트폴리오 프로젝트</h2>
        <div className="project-cards">
          {projectCards.map((card) => (
            <article className="project-card" key={card.id}>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <span>역할: {card.role}</span>
              <div className="project-card-actions">
                {card.linkHref ? (
                  <a className="project-link" href={card.linkHref} target="_blank" rel="noreferrer">
                    {card.linkLabel}
                  </a>
                ) : null}
                <button type="button" onClick={() => openUploadPicker(card.id)}>
                  업로드
                </button>
              </div>
              <input
                ref={(node) => {
                  uploadRefs.current[card.id] = node;
                }}
                className="hidden-file-input"
                type="file"
                accept=".pdf,.txt,.doc,.docx,.ppt,.pptx,.jpg,.jpeg,.png,.webp,.mp4,.mov"
                onChange={(event) => handleFileChange(card.id, event)}
              />
              <p className="upload-status">
                {uploadedFiles[card.id] ? `업로드됨: ${uploadedFiles[card.id]}` : '업로드 파일 없음'}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="skills-section" id="skills-section">
        <h2>핵심 역량</h2>
        <div className="skills-cards">
          {skillCards.map((card, index) => (
            <SkillCard
              key={card.id}
              icon={card.icon}
              title={card.title}
              description={card.description}
              bars={card.bars}
              index={index}
            />
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact-section">
        <h2>연락처</h2>
        <div className="contact-links">
          <a href="mailto:ydaun@naver.com">ydaun@naver.com</a>
          <a href="https://github.com/na-suryeon" target="_blank" rel="noreferrer">
            github.com/na-suryeon
          </a>
          <a href="https://portfolio.na-suryeon.com" target="_blank" rel="noreferrer">
            portfolio.na-suryeon.com
          </a>
        </div>

        <form className="contact-form" onSubmit={handleContactSubmit}>
          <label>
            <span>이름</span>
            <input
              name="name"
              type="text"
              value={contactForm.name}
              onChange={handleContactChange}
              placeholder="이름을 입력하세요"
            />
          </label>
          <label>
            <span>이메일</span>
            <input
              name="email"
              type="email"
              value={contactForm.email}
              onChange={handleContactChange}
              placeholder="회신받을 이메일"
            />
          </label>
          <label className="contact-message">
            <span>메시지</span>
            <textarea
              name="message"
              value={contactForm.message}
              onChange={handleContactChange}
              placeholder="문의 내용을 작성하세요"
              rows="5"
            />
          </label>
          <div className="contact-form-actions">
            <button type="submit">전송</button>
            <p className="contact-status">{contactStatus}</p>
          </div>
        </form>
      </section>

      <footer className="page-footer">
        <div className="footer-top">
          <div className="footer-brand">
            <p className="footer-copy">© 2026 Na Suryeon. All rights reserved.</p>
            <p className="footer-note">UI/UX 디자인과 영상을 통해 브랜드의 가치를 전달하는 포트폴리오입니다.</p>
          </div>

          <div className="footer-socials" aria-label="SNS 링크">
            {footerSocials.map((social) => (
              <FooterSocial key={social.label} {...social} />
            ))}
          </div>
        </div>

        <div className="footer-menu">
          {footerLinks.map((item) => (
            <button key={item.label} type="button" onClick={() => scrollToSection(item.href.replace('#', ''))}>
              {item.label}
            </button>
          ))}
        </div>
      </footer>

      {activePlan ? (
        <div className="modal-backdrop" role="presentation" onClick={() => setActivePlan(null)}>
          <div
            className="modal-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="plan-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button type="button" className="modal-close" aria-label="모달 닫기" onClick={() => setActivePlan(null)}>
              ×
            </button>
            <p className="modal-eyebrow">기획서 상세</p>
            <h3 id="plan-modal-title">{activePlan.title}</h3>
            <p className="modal-text">{activePlan.description}</p>
            <p className="modal-text">{activePlan.details}</p>
            <div className="modal-file">
              <strong>업로드 상태</strong>
              <span>{uploadedFiles[activePlan.id] ? uploadedFiles[activePlan.id] : '업로드된 파일이 없습니다.'}</span>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}

export default App;

<h1>테스트</h1>
