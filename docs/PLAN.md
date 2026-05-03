# Plan de Livraison - Analyse Cybersécurité Cymobility

## Vue d'Ensemble
**Durée** : 3-4 semaines | **Équipe** : 1 Security Engineer + 1 DevOps (support)

## Phase 1 : Préparation & Ingestion (J1-J3)

| Tâche | Owner | Livrables | Effort |
|-------|-------|-----------|--------|
| Collecte documentation Cymobility | Security Eng | SPECS complètement validées | 1j |
| Setup environnement scan | DevOps | Docker image, CI/CD hook | 1j |
| Config outils (Trivy, SonarQube, Semgrep) | Security Eng | docker-compose.yml, règles custom | 1.5j |

## Phase 2 : Scanning & Analyse (J4-J12)

| Tâche | Owner | Livrables | Effort |
|-------|-------|-----------|--------|
| Scan dépendances (all lang) | Security Eng | sbom.json, CVE list | 2j |
| Analyse statique code (patterns OWASP) | Security Eng | findings_static.json, hotspots | 3j |
| Secrets detection (git history + current) | Security Eng | secrets_report.md | 1.5j |
| Audit configuration (infra, envs, perms) | DevOps | config_audit.md | 1.5j |
| Validations manuelles (spot-check) | Security Eng | manual_findings.md | 2j |

## Phase 3 : Normalisation & Reporting (J13-J18)

| Tâche | Owner | Livrables | Effort |
|-------|-------|-----------|--------|
| Déduplication + enrichissement findings | Security Eng | findings_normalized.json | 2j |
| Calcul CVSS scores & effort remédiation | Security Eng | findings_scored.json | 1j |
| Rédaction rapport (REPORT.md) | Security Eng | rapport.md (exécutif + détail) | 2j |
| Matrice priorités & roadmap 30j | Security Eng | remediation_plan.md | 1j |
| Review interne + ajustements | Security Eng | findings_validated.json | 1j |

## Phase 4 : Livraison & Handoff (J19-J21)

| Tâche | Owner | Livrables | Effort |
|-------|-------|-----------|--------|
| Présentation exécutive (stakeholders) | Security Eng | slides + Q&A | 1j |
| Training équipe dev (utilisation findings) | Security Eng | workshop (2h) | 1j |
| Setup issue tracking dans Jira/GitHub | DevOps | template issues auto-generées | 0.5j |

## Dépendances Critiques
🔴 **Blockers** :
- Accès git repo Cymobility (J1)
- Documentation architecture/data-flow (J1)
- Env staging accessible pour validation (J8)

## Métriques de Succès
✅ **Coverage** : 100% code analysé, 0 exceptions  
✅ **Precision** : <5% faux positifs sur CRITICAL  
✅ **Actionabilité** : 90% findings avec remediation en <4h  
✅ **Délai** : Rapport final J21 ± 2j  

## Risques & Mitigation

| Risque | Impact | Mitigation |
|--------|--------|-----------|
| False positive surge | Délai rapport | Tool tuning preset, 2h revision buffer |
| Access issues repo | Blocage total | Demander accès J0, fallback: snapshot code |
| Infrastructure complexe | Scanning incomplete | Collaboration DevOps étroite dès J1 |

## Points de Contact
- **Product Owner** : Validation scope & priorités (kickoff)
- **Tech Lead Cymobility** : Architecture & context (recurring)
- **DevOps/Infra** : Configuration & accès env (support continu)
