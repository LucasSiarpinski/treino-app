# Modelo de dados (Supabase / Postgres)

Convenções: snake_case, plural, id uuid, timestamps em timestamptz (UTC).
Todas as tabelas com dados do usuário têm RLS: user_id = auth.uid().

## profiles (perfil — 1:1 com auth.users)
id (= auth.users.id), name, height_cm?, goal? (hypertrophy|strength|weight_loss|health),
max_session_minutes (default 120), created_at

## weight_history (histórico de peso)
id, user_id, weight_kg, recorded_at

## weekly_goal_history (histórico da meta semanal)
id, user_id, sessions_per_week (default 1),
valid_from (date — sempre a segunda-feira da semana em que a meta foi definida)
Único: (user_id, valid_from) → mudar a meta 2× na mesma semana sobrescreve (upsert)
Registro inicial criado no cadastro, com a segunda-feira da semana do cadastro.
Meta de uma semana W = registro com maior valid_from <= segunda-feira de W.

## muscle_groups (grupos musculares — fixa, 11 linhas)
id, name_pt, region (upper|core|lower), sort_order

## exercises (exercícios)
id, name, muscle_group_id, is_bodyweight (bool),
user_id? (null = catálogo; preenchido = privado do usuário),
external_id? (id na wger), is_active

## workouts (treinos)
id, user_id, name, status (draft|available|archived),
created_at, updated_at, deleted_at? (exclusão lógica)

## workout_exercises (prescrição)
id, workout_id, exercise_id, position, sets, reps_min, reps_max,
reference_weight_kg?, notes?

## sessions (sessões de treino)
id, user_id, workout_id, workout_name (snapshot),
status (in_progress|finished|discarded),
started_at, finished_at?, end_adjusted (bool), user_weight_kg?,
Cache: duration_sec, total_exercises, total_sets, total_reps, volume_kg
Índice único parcial: (user_id) WHERE status = 'in_progress'  → RN01

## session_exercises (snapshot da prescrição)
id, session_id, exercise_id, exercise_name, muscle_group_id, is_bodyweight,
planned_position, planned_sets, reps_min, reps_max, reference_weight_kg?

## sets (séries)
id, session_exercise_id, set_number, weight_kg? (no peso corporal = carga extra),
reps?, is_done (✓), is_extra, recorded_at?

## personal_records (PRs — cache)
id, user_id, exercise_id, type (max_weight|max_reps), value,
set_id, session_id, achieved_at, is_baseline (marca inicial)
Recalculado por exercício ao finalizar, editar ou excluir uma sessão.