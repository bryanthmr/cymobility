# Architecture Technique - Analyse Cybersécurité Cymobility

## Stack Technologique

### Outils d'Analyse
- **Scan de dépendances** : Trivy, Safety (Python), npm audit (JS)
- **Analyse statique** : SonarQube, Semgrep (patterns OWASP/CWE)
- **Détection secrets** : git-secrets, TruffleHog, detect-secrets
- **SBOM & CVE** : Cyclone DX, NIST NVD
- **Rapport** : Markdown + JSON structuré

### Environnement
- **Execution** : Docker container (isolation)
- **Logs** : ELK ou centralisé (audit trail)
- **Versionning** : Git (trace d'analyse)

## Modèle de Données

### Input
```
- Codebase Cymobility (git repo ou snapshot)
- Configuration d'infra (docker-compose, K8s manifests, .env patterns)
- Documentation d'architecture (flux, endpoints, sensibilités)
```

### Output
```
{
  "scan_id": "uuid",
  "timestamp": "ISO8601",
  "findings": [
    {
      "id": "CYM-001",
      "title": "SQL Injection in login form",
      "severity": "CRITICAL",
      "cvss_score": 9.8,
      "component": "app/auth.py:45",
      "description": "...",
      "remediation": "...",
      "effort": "2h"
    }
  ],
  "summary": {
    "total_findings": 24,
    "critical": 3,
    "high": 8,
    "medium": 10,
    "low": 3
  }
}
```

## Layout Fichiers

```
cymobility-security/
├── docs/
│   ├── SPECS.md
│   ├── ARCHITECTURE.md
│   ├── PLAN.md
│   └── REPORT.md (livrable final)
├── scans/
│   ├── code_analysis/
│   ├── dependency_scan/
│   ├── secrets_scan/
│   └── config_audit/
├── tools/
│   ├── Dockerfile
│   ├── scan.sh (orchestration)
│   └── requirements.txt
├── findings/
│   ├── findings.json (structured)
│   └── findings_raw/ (logs bruts)
└── remediation/
    ├── quick_wins.md
    └── roadmap_30j.md
```

## Décisions Architecturales

| Décision | Rationale | Tradeoff |
|----------|-----------|---------|
| **Scan statique uniquement** | Non-invasif, pas de downtime | Peut manquer vulnérabilités runtime |
| **Multi-outil** | Couverture CWE étendue | Overhead maintenance, false positives |
| **JSON structure** | Automation-ready, traçabilité | Plus verbose que plain text |
| **Docker isolé** | Sécurité des secrets, reproducibilité | Latency vs host scanning |

## Flux Principal
1. **Ingestion** : Clone repo + config gathering
2. **Scanning parallèle** : Dépendances, code, secrets, infra
3. **Normalisation** : Mapping vers format commun (CVSS, CWE)
4. **Déduplication** : Fusion findings entre outils
5. **Enrichissement** : Context applicatif, effort remédiation
6. **Reporting** : Markdown + JSON + visualisations
