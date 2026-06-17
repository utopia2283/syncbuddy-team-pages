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
ORG:SyncBuddy TECHNOLOGY
TITLE:${escapeHtml(cardData.titleEn || cardData.titleZh || '')}
TEL;TYPE=WORK,MSG:${escapeHtml(cardData.phoneHK || '')}
TEL;TYPE=CELL:${escapeHtml(cardData.phoneCN || '')}
EMAIL;TYPE=WORK:${escapeHtml(cardData.email || '')}
ADR;TYPE=WORK:;;${escapeHtml(cardData.address || '')};;;;
URL:https://syncbuddyai.com
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

// Render card preview or full card
function renderCard(data, container) {
    if (!container) return;

    // Make data available globally for inline onclick handlers
    window._currentCardData = data;

    // Filter out empty track records
    const tracks = [
        { icon: '🥇', title: data.track1Title, desc: data.track1Desc },
        { icon: '🤝', title: data.track2Title, desc: data.track2Desc },
        { icon: '📊', title: data.track3Title, desc: data.track3Desc },
        { icon: '🎓', title: data.track4Title, desc: data.track4Desc },
    ].filter(t => t.title && t.title.trim() !== '');

    // Filter out empty badges
    const badges = [];
    if (data.badge1) badges.push({ text: data.badge1, type: data.badge1Type });
    if (data.badge2) badges.push({ text: data.badge2, type: data.badge2Type });
    if (data.badge3) badges.push({ text: data.badge3, type: data.badge3Type });

    // Clean website URL
    let websiteUrl = data.website || 'https://syncbuddyai.com';
    if (websiteUrl && !websiteUrl.startsWith('http')) {
        websiteUrl = 'https://' + websiteUrl;
    }

    // Extract domain from website
    let websiteDisplay = data.website || 'syncbuddyai.com';
    if (websiteDisplay.startsWith('http')) {
        try {
            websiteDisplay = new URL(websiteDisplay).hostname;
        } catch (e) {
            websiteDisplay = websiteDisplay.replace(/^https?:\/\//, '').split('/')[0];
        }
    }

    container.innerHTML = `
        <div class="card-outer-glow"></div>
        <div class="card-inner-glow"></div>
        <div class="card">
            <div class="scanline"></div>
            <div class="circuit-overlay"></div>
            <div class="data-stream">01001000 01000101 01001100 01001100 01001111</div>
            <div class="data-stream">01000001 01001000 00100000 01010011 01011001</div>

            <div class="save-contact-btn" id="saveContactBtn" style="position:absolute;top:20px;right:20px;padding:8px 14px;font-size:12px;z-index:10;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="8.5" cy="7" r="4"/>
                    <line x1="20" y1="8" x2="20" y2="14"/>
                    <line x1="23" y1="11" x2="17" y2="11"/>
                </svg>
                Save
            </div>

            <div class="hero-section">
                <div class="hero-left">
                    <div class="hero-logo">
                        <div class="hero-logo-icon">
                            <img src="logo.png" alt="Logo" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2280%22>👤</text></svg>'">
                        </div>
                        <div class="hero-logo-text">
                            <div class="hero-logo-main">SyncBuddy</div>
                            <div class="hero-logo-sub">TECHNOLOGY</div>
                        </div>
                    </div>

                    <div class="hero-title-zh">${escapeHtml(data.titleZh)}</div>
                    <div class="hero-title-en">${escapeHtml(data.titleEn)}</div>

                    <a href="${escapeHtml(websiteUrl)}" target="_blank" class="hero-website">
                        <span class="hero-website-text">${escapeHtml(websiteDisplay)}/</span>
                        <span class="hero-website-icon">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/>
                                <path d="m13 13 6 6"/>
                            </svg>
                        </span>
                    </a>

                    <a href="https://www.youtube.com/watch?v=F8Y4KIbx_5w" target="_blank" class="master-btn">
                        <div class="master-icon"></div>
                        <div class="master-text-group">
                            <div class="master-t1">THE MASTER PLAN</div>
                            <div class="master-t2">啟動實體世界覺醒</div>
                        </div>
                    </a>
                </div>

                <div class="hero-right">
                    <div class="profile-container">
                        <div class="profile-3d-shadow"></div>
                        <div class="profile-ring">
                            <div class="profile-inner">
                                <img class="${escapeHtml(getProfilePhotoClass(data.nameEn))}" src="${escapeHtml(data.photoUrl || 'profile-photo.jpg')}" alt="${escapeHtml(data.nameEn)}" onerror="this.src='profile-photo.jpg'">
                                <div class="profile-scanline"></div>
                                <div class="profile-gradient-overlay"></div>
                            </div>
                        </div>
                        <div class="plus-badge">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M5 12h14"/><path d="M12 5v14"/>
                            </svg>
                        </div>
                    </div>

                    <div class="hero-name">${escapeHtml(data.nameZh)} ${escapeHtml(data.nameEn)}</div>
                    <div class="hero-title">${escapeHtml(data.titleEn)}</div>

                    ${badges.length > 0 ? `
                    <div class="title-badges">
                        ${badges.map(b => `<span class="title-badge ${escapeHtml(b.type)}">${escapeHtml(b.text)}</span>`).join('')}
                    </div>
                    ` : ''}
                </div>
            </div>

            ${data.quote ? `
            <div class="quote-section">
                <div class="quote-text">${escapeHtml(data.quote)}</div>
            </div>
            ` : ''}

            ${tracks.length > 0 ? `
            <div class="divider"></div>
            <div class="track-records">
                <div class="track-title">🏆 核心 Track Records</div>
                <div class="track-grid">
                    ${tracks.map((t, i) => `
                    <div class="track-item">
                        <div class="track-header">
                            <div class="track-icon">${t.icon}</div>
                            <div class="track-title-text">${escapeHtml(t.title)}</div>
                        </div>
                        <div class="track-description">${escapeHtml(t.desc)}</div>
                    </div>
                    `).join('')}
                </div>
            </div>
            ` : ''}

            ${(data.phoneHK || data.phoneCN || data.email || data.address) ? `
            <div class="divider"></div>
            <div class="contact-grid">
                ${data.phoneHK ? `
                <div class="contact-item" onclick="copyToClipboard('${escapeHtml(data.phoneHK)}', this)">
                    <div class="contact-icon">📱</div>
                    <div>
                        <div class="contact-label">Phone (HK)</div>
                        <div class="contact-value">${escapeHtml(data.phoneHK)}</div>
                    </div>
                    <div class="whatsapp-btn" onclick="event.stopPropagation(); window.open('https://wa.me/${escapeHtml(data.phoneHK.replace(/[^0-9]/g, ''))}', '_blank')" title="WhatsApp">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.36-.214-3.742.982.998-3.653-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.447-9.894 9.894-9.894 2.643.001 5.137 1.033 7.028 2.924a9.832 9.832 0 012.923 7.031c-.003 5.45-4.447 9.894-9.894 9.894m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    </div>
                </div>
                ` : ''}
                ${data.phoneCN ? `
                <div class="contact-item" onclick="copyToClipboard('${escapeHtml(data.phoneCN)}', this)">
                    <div class="contact-icon">📱</div>
                    <div>
                        <div class="contact-label">Phone (CN)</div>
                        <div class="contact-value">${escapeHtml(data.phoneCN)}</div>
                    </div>
                </div>
                ` : ''}
                ${data.email ? `
                <div class="contact-item" onclick="window.location.href='mailto:${escapeHtml(data.email)}'">
                    <div class="contact-icon">✉️</div>
                    <div>
                        <div class="contact-label">Email</div>
                        <div class="contact-value">${escapeHtml(data.email)}</div>
                    </div>
                </div>
                ` : ''}
                ${data.address ? `
                <div class="contact-item" onclick="window.open('https://www.google.com/maps/search/?api=1&query=尖沙咀冠華中心603室', '_blank')">
                    <div class="contact-icon">📍</div>
                    <div>
                        <div class="contact-label">Address</div>
                        <div class="contact-value">尖沙咀冠華中心603室</div>
                    </div>
                </div>
                ` : ''}
            </div>
            ` : ''}

            <div class="footer">
                <div class="tagline">
                    <span>#香港AI策略專家</span> | #混合型領袖<br>
                    #技術的靈魂 · #戰略的羅盤 · #精準對接實體產業剛性需求
                </div>
            </div>
        </div>
    `;

    // Attach save contact button listener
    const saveBtn = container.querySelector('#saveContactBtn');
    if (saveBtn) {
        saveBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const cardData = window._currentCardData;
            if (!cardData) {
                showNotification('No contact data');
                return;
            }
            const name = cardData.nameEn || cardData.nameZh || 'contact';
            const vCard = `BEGIN:VCARD\r\nVERSION:3.0\r\nN:${cardData.nameZh || ''};${cardData.nameEn || ''};;;\r\nFN:${cardData.nameEn || cardData.nameZh}\r\nORG:SyncBuddy TECHNOLOGY\r\nTITLE:${cardData.titleEn || cardData.titleZh}\r\nTEL;TYPE=WORK,MSG:${cardData.phoneHK || ''}\r\nTEL;TYPE=CELL:${cardData.phoneCN || ''}\r\nEMAIL;TYPE=WORK:${cardData.email || ''}\r\nADR;TYPE=WORK:;;${cardData.address || ''};;;;\r\nURL:https://syncbuddyai.com\r\nNOTE:${cardData.quote || ''}\r\nEND:VCARD`;
            const dataUri = 'data:text/vcard;charset=utf-8,' + encodeURIComponent(vCard);
            const link = document.createElement('a');
            link.href = dataUri;
            link.download = name + '.vcf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            showNotification('Contact saved!');
        });
    }
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
