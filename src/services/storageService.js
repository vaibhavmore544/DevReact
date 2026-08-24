export function generateEnrollmentId() {
  const n = Math.floor(1000 + Math.random() * 9000)
  return `ENR-${n}`
}

export function downloadFile(filename, content, mime = 'text/plain') {
  const blob = new Blob([content], { type: mime })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  a.click()
  URL.revokeObjectURL(url)
}
