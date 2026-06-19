// ================= Card Builder App =================

// Encode data to URL-safe string using encodeURIComponent
function encodeCardData(data) {
    try {
        return encodeURIComponent(JSON.stringify(data));
    } catch (e) {
        console.error('Encoding error:', e);
        return null;
    }
}

// Decode data from URL-safe string
function decodeCardData(encoded) {
    try {
        return JSON.parse(decodeURIComponent(encoded));
    } catch (e) {
        console.error('Decoding error:', e);
        return null;
    }
}

function getProfilePhotoClass(name) {
    return `profile-photo-${String(name || '')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '')}`;
}

// Generate shareable URL
function generateShareableURL(data) {
    const encoded = encodeCardData(data);
    if (!encoded) return null;
    const baseURL = window.location.origin + window.location.pathname.replace('index.html', '') + 'profile.html';
    return baseURL + '?data=' + encoded;
}

// Copy text to clipboard
function copyToClipboard(text, element) {
    navigator.clipboard.writeText(text).then(() => {
        if (element) {
            element.style.background = 'rgba(0, 229, 255, 0.15)';
            element.style.borderColor = 'rgba(0, 229, 255, 0.6)';
            setTimeout(() => {
                element.style.background = '';
                element.style.borderColor = '';
            }, 500);
        }
        showNotification('Copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
}

// Show notification
function showNotification(message) {
    let notification = document.querySelector('.notification');
    if (!notification) {
        notification = document.createElement('div');
        notification.className = 'notification';
        document.body.appendChild(notification);
    }
    notification.textContent = message;
    notification.classList.add('show');
    setTimeout(() => {
        notification.classList.remove('show');
    }, 2500);
}

// Make saveToContact globally accessible for inline onclick handlers
window.saveToContact = saveToContact;

// Debug helper
window.debugCard = () => {
    console.log('window._currentCardData:', window._currentCardData);
    return window._currentCardData;
};

// Save to phone contacts
function saveToContact(data) {
    // Use provided data or fall back to global
    const cardData = data || window._currentCardData;
    console.log('saveToContact called', { data, cardData, _currentCardData: window._currentCardData });
    if (!cardData) {
        showNotification('No contact data');
        return;
    }

    // Build vCard format
    const vCard = `BEGIN:VCARD
VERSION:3.0
N:${escapeHtml(cardData.nameZh || '')};${escapeHtml(cardData.nameEn || '')};;;
FN:${escapeHtml(cardData.nameEn || cardData.nameZh || '')}
ORG:${escapeHtml(cardData.companyFull || cardData.company || 'Sync Buddy Tech Limited')}
TITLE:${escapeHtml(cardData.titleEn || cardData.titleZh || '')}
TEL;TYPE=WORK,MSG:${escapeHtml(cardData.phoneHK || '')}
TEL;TYPE=CELL:${escapeHtml(cardData.phoneCN || '')}
EMAIL;TYPE=WORK:${escapeHtml(cardData.email || '')}
ADR;TYPE=WORK:;;${escapeHtml(cardData.address || '')};;;;
URL:https://syncbuddy.ai
NOTE:${escapeHtml(cardData.quote || '')}
END:VCARD`;

    const blob = new Blob([vCard], { type: 'text/vcard;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${escapeHtml(cardData.nameEn || 'contact')}.vcf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
    showNotification('Contact saved!');
}

// Form validation
function validateForm(data) {
    const errors = [];

    if (!data.nameZh || data.nameZh.trim() === '') {
        errors.push('Name (Chinese) is required');
    }
    if (!data.nameEn || data.nameEn.trim() === '') {
        errors.push('Name (English) is required');
    }
    if (!data.titleZh || data.titleZh.trim() === '') {
        errors.push('Title (Chinese) is required');
    }
    if (!data.titleEn || data.titleEn.trim() === '') {
        errors.push('Title (English) is required');
    }

    return errors;
}

// Get form data
function getFormData() {
    return {
        // Basic Info
        nameZh: document.getElementById('nameZh')?.value?.trim() || '',
        nameEn: document.getElementById('nameEn')?.value?.trim() || '',
        titleZh: document.getElementById('titleZh')?.value?.trim() || '',
        titleEn: document.getElementById('titleEn')?.value?.trim() || '',
        company: document.getElementById('company')?.value?.trim() || '',
        website: document.getElementById('website')?.value?.trim() || '',
        email: document.getElementById('email')?.value?.trim() || '',
        phoneHK: document.getElementById('phoneHK')?.value?.trim() || '',
        phoneCN: document.getElementById('phoneCN')?.value?.trim() || '',
        address: document.getElementById('address')?.value?.trim() || '',
        photoUrl: document.getElementById('photoUrl')?.value?.trim() || '',
        quote: document.getElementById('quote')?.value?.trim() || '',

        // Track Records
        track1Title: document.getElementById('track1Title')?.value?.trim() || '',
        track1Desc: document.getElementById('track1Desc')?.value?.trim() || '',
        track2Title: document.getElementById('track2Title')?.value?.trim() || '',
        track2Desc: document.getElementById('track2Desc')?.value?.trim() || '',
        track3Title: document.getElementById('track3Title')?.value?.trim() || '',
        track3Desc: document.getElementById('track3Desc')?.value?.trim() || '',
        track4Title: document.getElementById('track4Title')?.value?.trim() || '',
        track4Desc: document.getElementById('track4Desc')?.value?.trim() || '',

        // Badges
        badge1: document.getElementById('badge1')?.value?.trim() || '',
        badge1Type: document.getElementById('badge1Type')?.value || 'association',
        badge2: document.getElementById('badge2')?.value?.trim() || '',
        badge2Type: document.getElementById('badge2Type')?.value || 'business',
        badge3: document.getElementById('badge3')?.value?.trim() || '',
        badge3Type: document.getElementById('badge3Type')?.value || 'business',
    };
}

// Make saveToContact globally accessible for inline onclick handlers
window.saveToContact = saveToContact;

// Build the unified credential list from new `credentials` data, with
// backward-compat fallback so the builder form (badges/tracks) still renders.
function buildCredentials(data) {
    if (Array.isArray(data.credentials) && data.credentials.length) {
        return data.credentials.map(c => ({ zh: c.zh || '', en: c.en || '' }));
    }
    const out = [];
    [data.badge1, data.badge2, data.badge3].filter(Boolean).forEach(b => out.push({ zh: b, en: '' }));
    return out;
}

// Core achievements — rendered as a distinct "Track Record" section.
function buildTrack(data) {
    if (Array.isArray(data.track) && data.track.length) {
        return data.track.map(t => ({ zh: t.zh || '', en: t.en || '' }));
    }
    const out = [];
    [[data.track1Title, data.track1DescEn || data.track1Desc],
     [data.track2Title, data.track2DescEn || data.track2Desc],
     [data.track3Title, data.track3DescEn || data.track3Desc],
     [data.track4Title, data.track4DescEn || data.track4Desc]]
        .filter(t => t[0]).forEach(([zh, en]) => out.push({ zh, en: en || '' }));
    return out;
}

// Canonical public card URL, e.g. https://syncbuddy.ai/match
function cardURL(data) {
    if (data.cardUrl) return data.cardUrl.replace(/^https?:\/\//, '');
    const slug = (data.slug || (data.nameEn || '').split(' ')[0] || '').toLowerCase();
    return 'syncbuddy.ai/' + slug;
}

// Lazily load the vendored offline QR library (same-origin, no network call to
// any third party). Resolves once window.qrcode is available.
function ensureQRLib() {
    return new Promise((resolve, reject) => {
        if (window.qrcode) return resolve();
        const s = document.createElement('script');
        s.src = 'qrcode.js';
        s.onload = () => resolve();
        s.onerror = () => reject(new Error('qr lib failed'));
        document.head.appendChild(s);
    });
}

// Render the QR image (with center logo via CSS overlay) into the modal.
function renderQRImage(url) {
    const img = document.getElementById('ncQrImg');
    if (!img) return;
    try {
        const qr = window.qrcode(0, 'H');      // auto type, high error correction
        qr.addData('https://' + url);
        qr.make();
        img.src = qr.createDataURL(8, 0);      // crisp modules, no quiet-zone padding
    } catch (e) {
        console.error('QR render failed', e);
        showNotification('QR 生成失敗');
    }
}

let _ncLastFocus = null;
function openQRModal() {
    const scrim = document.getElementById('ncScrim');
    if (!scrim) return;
    _ncLastFocus = document.activeElement;
    scrim.classList.add('open');
    document.body.style.overflow = 'hidden';
    ensureQRLib()
        .then(() => renderQRImage(cardURL(window._currentCardData || {})))
        .catch(() => showNotification('QR 函式庫載入失敗'));
    const close = scrim.querySelector('.nc-qr-close');
    if (close) close.focus();
}
function closeQRModal() {
    const scrim = document.getElementById('ncScrim');
    if (!scrim) return;
    scrim.classList.remove('open');
    document.body.style.overflow = '';
    if (_ncLastFocus && _ncLastFocus.focus) _ncLastFocus.focus();
}
window.openQRModal = openQRModal;
window.closeQRModal = closeQRModal;
document.addEventListener('keydown', (e) => {
    const scrim = document.getElementById('ncScrim');
    if (!scrim || !scrim.classList.contains('open')) return;
    if (e.key === 'Escape') { closeQRModal(); }
    if (e.key === 'Tab') {           // simple focus trap (close btn only focusable)
        const close = scrim.querySelector('.nc-qr-close');
        if (close) { e.preventDefault(); close.focus(); }
    }
});

// Render card preview or full card — mobile-first "Linear" namecard
function renderCard(data, container) {
    if (!container) return;
    window._currentCardData = data;

    const creds = buildCredentials(data);
    const track = buildTrack(data);
    const url = cardURL(data);
    const mapHref = data.addressMapQuery ||
        ('https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(data.address || ''));
    const waPhone = (data.phoneHK || '').replace(/[^0-9]/g, '');
    const tags = Array.isArray(data.hashtags) && data.hashtags.length
        ? data.hashtags : ['#Synchronize', '#AI', '#KingMaker'];
    // YouTube company-intro button (set data.youtubeUrl to "" on a card to hide)
    const ytUrl = data.youtubeUrl !== undefined ? data.youtubeUrl : 'https://www.youtube.com/watch?v=F8Y4KIbx_5w';
    const ytLabel = data.youtubeLabel || '公司簡介 · Company Intro';

    const contactRows = [];
    if (data.phoneHK) {
        contactRows.push(`
        <div class="nc-ci" onclick="copyToClipboard('${escapeHtml(data.phoneHK)}', this)">
            <div class="nc-ci-lab">Phone HK</div>
            <div class="nc-ci-val">${escapeHtml(data.phoneHK)}</div>
            ${waPhone ? `<button class="nc-wa" title="WhatsApp" aria-label="WhatsApp"
                onclick="event.stopPropagation();window.open('https://wa.me/${waPhone}','_blank')">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.36-.214-3.742.982.998-3.653-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.447-9.894 9.894-9.894 2.643.001 5.137 1.033 7.028 2.924a9.832 9.832 0 012.923 7.031c-.003 5.45-4.447 9.894-9.894 9.894m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </button>` : ''}
        </div>`);
    }
    if (data.phoneCN) {
        contactRows.push(`
        <div class="nc-ci" onclick="copyToClipboard('${escapeHtml(data.phoneCN)}', this)">
            <div class="nc-ci-lab">Phone CN</div>
            <div class="nc-ci-val">${escapeHtml(data.phoneCN)}</div>
        </div>`);
    }
    if (data.email) {
        contactRows.push(`
        <div class="nc-ci" onclick="window.location.href='mailto:${escapeHtml(data.email)}'">
            <div class="nc-ci-lab">Email</div>
            <div class="nc-ci-val">${escapeHtml(data.email)}</div>
        </div>`);
    }
    if (data.wechat) {
        contactRows.push(`
        <div class="nc-ci" onclick="copyToClipboard('${escapeHtml(data.wechat)}', this)">
            <div class="nc-ci-lab">WeChat</div>
            <div class="nc-ci-val">${escapeHtml(data.wechat)}</div>
        </div>`);
    }
    if (data.address) {
        contactRows.push(`
        <div class="nc-ci nc-ci-full" onclick="window.open('${escapeHtml(mapHref)}','_blank')">
            <div class="nc-ci-lab">Address</div>
            <div class="nc-ci-val">${escapeHtml(data.address)}</div>
        </div>`);
    }

    container.innerHTML = `
    <div class="nc-wrap">
    <span class="nc-p"></span><span class="nc-p"></span><span class="nc-p"></span><span class="nc-p"></span>
    <div class="nc">
        <div class="nc-hero">
            <img class="nc-hero-img" src="${escapeHtml(data.photoUrl || 'profile-photo.jpg')}"
                 alt="${escapeHtml(data.nameEn || '')}" onerror="this.src='profile-photo.jpg'">
            <div class="nc-hero-scrim"></div>
            <div class="nc-brand">
                <div class="nc-logo-box"><img class="nc-logo" src="logo.png" alt="SyncBuddy"
                     onerror="this.style.visibility='hidden'"></div>
                <div>
                    <div class="nc-brand-name">${escapeHtml(data.company || 'SyncBuddy')}</div>
                    <div class="nc-brand-sub">${escapeHtml(data.companyFull || 'Sync Buddy Tech Limited')}</div>
                </div>
            </div>
            <div class="nc-hero-id">
                <div class="nc-name-zh">${escapeHtml(data.nameZh || '')}</div>
                <div class="nc-name-en">${escapeHtml(data.nameEn || '')}</div>
                <div class="nc-title">${escapeHtml(data.titleEn || '')}</div>
                ${data.titleZh ? `<div class="nc-title-zh">${escapeHtml(data.titleZh)}</div>` : ''}
            </div>
        </div>

        <div class="nc-body">
            ${data.quote ? `<div class="nc-quote">${escapeHtml(data.quote)}</div>` : ''}

            ${track.length ? `
            <div class="nc-sec-label">核心戰績 · Track Record</div>
            <div class="nc-track">
                ${track.map((t, i) => `
                <div class="nc-tr">
                    <span class="nc-tr-num">${String(i + 1).padStart(2, '0')}</span>
                    <div class="nc-tr-body">
                        ${t.zh ? `<div class="nc-tr-zh">${escapeHtml(t.zh)}</div>` : ''}
                        ${t.en ? `<div class="nc-tr-en">${escapeHtml(t.en)}</div>` : ''}
                    </div>
                </div>`).join('')}
            </div>` : ''}

            ${creds.length ? `
            <div class="nc-sec-label">資歷 · Credentials</div>
            <ul class="nc-creds">
                ${creds.map(c => `
                <li class="nc-cred">
                    <span class="nc-cred-dot"></span>
                    <div>
                        ${c.zh ? `<div class="nc-cred-zh">${escapeHtml(c.zh)}</div>` : ''}
                        ${c.en ? `<div class="nc-cred-en">${escapeHtml(c.en)}</div>` : ''}
                    </div>
                </li>`).join('')}
            </ul>` : ''}

            ${contactRows.length ? `
            <div class="nc-sec-label">聯絡 · Contact</div>
            <div class="nc-contact">${contactRows.join('')}</div>` : ''}
        </div>

        <div class="nc-footer">
            <button class="nc-qr-btn" id="ncQrBtn" type="button" aria-haspopup="dialog">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"
                     stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h3v3h-3zM18 18h3v3h-3z"/>
                </svg>
                掃描加我 · Scan my card
            </button>
            ${ytUrl ? `
            <a class="nc-yt-btn" href="${escapeHtml(ytUrl)}" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z"/>
                </svg>
                ${escapeHtml(ytLabel)}
            </a>` : ''}
            <button class="nc-save-btn" id="ncSaveBtn" type="button">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                     stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/>
                    <polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/>
                </svg>
                儲存到通訊錄 · Save contact
            </button>
            <div class="nc-tags">${tags.map(t => `<span>${escapeHtml(t)}</span>`).join('')}</div>
        </div>
    </div>
    </div>

    <div class="nc-scrim" id="ncScrim" role="dialog" aria-modal="true"
         aria-label="QR code — ${escapeHtml(data.nameEn || '')}"
         onclick="if(event.target===this)closeQRModal()">
        <div class="nc-qr-card">
            <button class="nc-qr-close" type="button" aria-label="關閉" onclick="closeQRModal()">×</button>
            <div class="nc-qr-name">${escapeHtml(data.nameEn || '')}</div>
            <div class="nc-qr-url">${escapeHtml(url)}</div>
            <div class="nc-qr-wrap">
                <img class="nc-qr-img" id="ncQrImg" alt="QR code" width="220" height="220">
                <div class="nc-qr-logo"><img src="logo.png" alt="" onerror="this.style.display='none'"></div>
            </div>
            <div class="nc-qr-hint">用相機掃描即可打開電子名片</div>
        </div>
    </div>`;

    const qrBtn = container.querySelector('#ncQrBtn');
    if (qrBtn) qrBtn.addEventListener('click', openQRModal);
    const saveBtn = container.querySelector('#ncSaveBtn');
    if (saveBtn) saveBtn.addEventListener('click', () => saveToContact(window._currentCardData));
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Initialize form page
function initFormPage() {
    const form = document.getElementById('cardForm');
    const previewContainer = document.getElementById('previewContainer');
    const previewBtn = document.getElementById('previewBtn');
    const shareBtn = document.getElementById('shareBtn');
    const copyLinkBtn = document.getElementById('copyLinkBtn');

    if (!form) return;

    // Preview button - update live preview
    if (previewBtn) {
        previewBtn.addEventListener('click', () => {
            const data = getFormData();
            if (previewContainer) {
                previewContainer.innerHTML = '<div class="card-container" id="previewCard"></div>';
                const cardContainer = document.getElementById('previewCard');
                renderCard(data, cardContainer);

                // Scroll to preview
                previewContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }

    // Share button - generate URL and show
    if (shareBtn) {
        shareBtn.addEventListener('click', () => {
            const data = getFormData();
            const errors = validateForm(data);

            if (errors.length > 0) {
                showNotification('Please fill in required fields: ' + errors[0]);
                return;
            }

            const url = generateShareableURL(data);
            if (url) {
                // Copy to clipboard
                navigator.clipboard.writeText(url).then(() => {
                    showNotification('Shareable link copied to clipboard!');
                }).catch(() => {
                    showNotification('Link generated! Copy it manually.');
                });
            }
        });
    }

    // Copy link button (alternative)
    if (copyLinkBtn) {
        copyLinkBtn.addEventListener('click', () => {
            const data = getFormData();
            const url = generateShareableURL(data);
            if (url) {
                navigator.clipboard.writeText(url).then(() => {
                    showNotification('Link copied!');
                });
            }
        });
    }

    // Auto-populate from URL if data param exists (for form editing)
    const urlParams = new URLSearchParams(window.location.search);
    const dataParam = urlParams.get('data');
    if (dataParam) {
        const data = decodeCardData(dataParam);
        if (data) {
            // Populate form fields
            Object.keys(data).forEach(key => {
                const input = document.getElementById(key);
                if (input) {
                    input.value = data[key];
                }
            });
        }
    }

    // Real-time preview on input
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            if (previewContainer) {
                const data = getFormData();
                previewContainer.innerHTML = '<div class="card-container" id="previewCard"></div>';
                const cardContainer = document.getElementById('previewCard');
                renderCard(data, cardContainer);
            }
        });
    });

    // Initial preview
    setTimeout(() => {
        const data = getFormData();
        if (previewContainer) {
            previewContainer.innerHTML = '<div class="card-container" id="previewCard"></div>';
            const cardContainer = document.getElementById('previewCard');
            renderCard(data, cardContainer);
        }
    }, 100);
}

// Initialize profile page
function initProfilePage() {
    const cardContainer = document.getElementById('cardContainer');
    if (!cardContainer) return;

    const urlParams = new URLSearchParams(window.location.search);
    const dataParam = urlParams.get('data');

    if (!dataParam) {
        cardContainer.innerHTML = `
            <div class="card" style="text-align: center; padding: 60px;">
                <h2 style="color: #00E5FF; margin-bottom: 20px;">No Card Data</h2>
                <p style="color: #8a8f98;">Please create a card from the form page first.</p>
                <a href="index.html" class="btn btn-primary" style="margin-top: 20px; display: inline-flex;">
                    Create Your Card
                </a>
            </div>
        `;
        return;
    }

    const data = decodeCardData(dataParam);
    if (!data) {
        cardContainer.innerHTML = `
            <div class="card" style="text-align: center; padding: 60px;">
                <h2 style="color: #ff4444; margin-bottom: 20px;">Invalid Card Data</h2>
                <p style="color: #8a8f98;">The card data appears to be corrupted.</p>
                <a href="index.html" class="btn btn-primary" style="margin-top: 20px; display: inline-flex;">
                    Create New Card
                </a>
            </div>
        `;
        return;
    }

    renderCard(data, cardContainer);
}

// Share button functionality for profile page
function initShareButton() {
    const shareBtn = document.getElementById('shareProfileBtn');
    if (shareBtn) {
        shareBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(window.location.href).then(() => {
                showNotification('Link copied to clipboard!');
            }).catch(() => {
                showNotification('Could not copy link');
            });
        });
    }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    initFormPage();
    initProfilePage();
    initShareButton();
});

// Export for use in inline handlers
window.copyToClipboard = copyToClipboard;
window.showNotification = showNotification;
window.saveToContact = saveToContact;
window.escapeHtml = escapeHtml;
